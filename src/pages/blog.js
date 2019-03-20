import React from 'react';
import { kebabCase } from 'lodash';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges;
	return (
		<Layout>
			<SEO
				title="Blog"
				keywords={[`gatsby`, `application`, `react`, `portfolio`]}
			/>
			<ul className="list-unstyled">
				{posts.map(post => (
					<li key={post.node.id} className="media">
						{post.node.frontmatter.thumbnail && <Link to={post.node.fields.slug}>
							<Img
								fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}
							/>
						</Link>}
						<div className="media-body">
							<h5 className="mt-0 mb-1">{post.node.frontmatter.title}</h5>
							<p>{post.node.excerpt} <Link to={post.node.fields.slug}>Read More</Link></p>
							{post.node.frontmatter.tags ? (
								<div className="btn-group btn-group-sm" role="group" aria-label="Tags">
									{post.node.frontmatter.tags.map(tag => (
										<Link key={tag + `tag`} className="btn btn-outline-info" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
									))}
								</div>
							) : null}
							<p><small className="font-weight-lighter font-italic">{post.node.frontmatter.date}</small></p>
						</div>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
					  fixed(width: 200, height: 200) {
						  ...GatsbyImageSharpFixed
					  }
				  }
			  }
          }
        }
      }
    }
  }
`;
