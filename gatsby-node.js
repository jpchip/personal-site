const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const kebabCase = str =>
	str
		.toString()
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')

// WordPress.com's free-tier hosting doesn't support WPGraphQL, so
// gatsby-source-wordpress can't be used here. This pulls the same data
// (posts tagged "illegible") from the public REST API instead.
const ILLEGIBLE_POSTS_URL =
	'https://public-api.wordpress.com/rest/v1.1/sites/mylifeintheservice.wordpress.com/posts/?tag=illegible&fields=ID,title,URL,excerpt&number=100'

exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
}) => {
	const { createNode } = actions

	let posts = []
	try {
		const response = await fetch(ILLEGIBLE_POSTS_URL)
		if (!response.ok) {
			throw new Error(`WordPress.com API returned ${response.status}`)
		}
		const data = await response.json()
		posts = data.posts || []
	} catch (error) {
		console.warn(
			`Warning: could not fetch illegible posts from WordPress.com. The /illegible page will be empty for this build.`,
			error.message
		)
		return
	}

	posts.forEach(post => {
		const nodeContent = JSON.stringify(post)
		createNode({
			id: createNodeId(`illegible-post-${post.ID}`),
			wordpressId: post.ID,
			title: post.title,
			link: post.URL,
			excerpt: post.excerpt,
			internal: {
				type: `IllegiblePost`,
				mediaType: `application/json`,
				content: nodeContent,
				contentDigest: createContentDigest(nodeContent),
			},
		})
	})
}

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	createTypes(`
    type IllegiblePost implements Node {
      wordpressId: Int
      title: String
      link: String
      excerpt: String
    }

    type ProjectsJson implements Node {
      thumbnailImage: File @fileByRelativePath
    }

    type MarkdownRemarkFrontmatter {
      thumbnail: File @fileByRelativePath
    }
  `)
}

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const postTemplate = path.resolve(`src/templates/postTemplate.js`)
	const tagTemplate = path.resolve(`src/templates/tagsTemplate.js`)

	return graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		const posts = result.data.allMarkdownRemark.edges
		posts.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: postTemplate,
				context: { slug: node.fields.slug }, // additional data can be passed via context
			})
		})

		// create Tags pages
		// pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
		let tags = []
		// Iterate through each post, putting all found tags into `tags`
		posts.forEach(({ node }) => {
			if (node.frontmatter && node.frontmatter.tags) {
				tags = tags.concat(node.frontmatter.tags)
			}
		})
		// Eliminate duplicate tags
		tags = [...new Set(tags)]
		// Make tag pages
		tags.forEach(tag => {
			createPage({
				path: `/tags/${kebabCase(tag)}/`,
				component: tagTemplate,
				context: {
					tag,
				},
			})
		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}
