import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const ProjectsPage = ({ data }) => (
	<Layout>
		<SEO
			title="Projects"
			keywords={[`gatsby`, `application`, `react`, `portfolio`]}
		/>
		<h1>Projects</h1>
		<div className="card-columns">
			{data.allProjectsJson.edges.map(project => (
				<div key={project.node.id} className="card mb-2">
					<div className="card-header">{project.node.title}</div>
						{project.node.thumbnailImage.childImageSharp &&
						<Img className="card-img-top" fluid={project.node.thumbnailImage.childImageSharp.fluid} />
						}
					<div className="card-body">
						<p className="card-text">
							{project.node.description}
						</p>
						<a href={project.node.url} className="btn btn-primary">
							Visit the Website
						</a>
					</div>
				</div>
			))}
		</div>
	</Layout>
);

export default ProjectsPage;


export const projectsQuery = graphql`
    query {
        allProjectsJson(sort: { order: ASC, fields: [title] }) {
            edges {
                node {
                    id
                    title
                    date
                    description
                    url
                    thumbnailImage {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
