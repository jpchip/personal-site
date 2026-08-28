import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const kebabCase = str =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h1 className="text-white">Thoughts</h1>
      {posts.map(post => (
        <div key={post.node.id} className="card mt-3">
          <div className="blog-media d-flex flex-wrap ms-1 mt-1">
            {post.node.frontmatter.thumbnail && (
              <Link to={post.node.fields.slug}>
                <GatsbyImage
                  image={getImage(post.node.frontmatter.thumbnail)}
                  alt={post.node.frontmatter.title}
                />
              </Link>
            )}
            <div className="flex-grow-1 ms-2 mt-1">
              <h5 className="mt-0 mb-1">{post.node.frontmatter.title}</h5>
              <p>
                {post.node.excerpt}{" "}
                <Link to={post.node.fields.slug}>Read More</Link>
              </p>
              {post.node.frontmatter.tags ? (
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Tags"
                >
                  {post.node.frontmatter.tags.map(tag => (
                    <Link
                      key={tag + `tag`}
                      className="btn btn-outline-info"
                      to={`/tags/${kebabCase(tag)}/`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              ) : null}
              <p>
                <small className="fw-lighter fst-italic">
                  {post.node.frontmatter.date}
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage

export const Head = () => (
  <Seo
    title="Thoughts"
    keywords={[`blog`, `articles`, `programming`, `random`]}
    bodyClass="jellies"
  />
)

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 200, height: 200, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
