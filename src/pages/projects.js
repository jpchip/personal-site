import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Helmet from 'react-helmet'

const ProjectsPage = ({ data }) => (
	<Layout>
		<Helmet>
			<body className="keyboard" />
		</Helmet>
		<SEO
			title="Projects"
			keywords={[`gatsby`, `application`, `react`, `portfolio`]}
		/>
		<h1 className="text-white">Projects</h1>
		<div className="card-columns">
			{data.allProjectsJson.edges.map(project => (
				<div key={project.node.id} className="card mb-2">
					<div className="card-header">{project.node.title}</div>
					<a href={project.node.url} target="_blank">
						{project.node.thumbnailImage.childImageSharp &&
						<Img className="card-img-top border-bottom" fluid={project.node.thumbnailImage.childImageSharp.fluid} />
						}
					</a>
					<div className="card-body">
						<p className="card-text">
							{project.node.description}
						</p>
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
