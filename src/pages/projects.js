import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsPage = ({ data }) => (
  <Layout>
    <h1 className="text-white">Projects</h1>
    <div className="card-columns">
      {data.allProjectsJson.edges.map(project => (
        <div key={project.node.id} className="card mb-2">
          <div className="card-header">{project.node.title}</div>
          <a href={project.node.url} target="_blank" rel="noopener noreferrer">
            {getImage(project.node.thumbnailImage) && (
              <GatsbyImage
                className="card-img-top border-bottom"
                image={getImage(project.node.thumbnailImage)}
                alt={project.node.title}
              />
            )}
          </a>
          <div className="card-body">
            <p className="card-text">{project.node.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default ProjectsPage

export const Head = () => (
  <Seo
    title="Projects"
    keywords={[`projects`, `hacks`, `open source`, `portfolio`]}
    bodyClass="keyboard"
  />
)

export const projectsQuery = graphql`
  query {
    allProjectsJson(sort: { title: ASC }) {
      edges {
        node {
          id
          title
          date
          description
          url
          thumbnailImage {
            childImageSharp {
              gatsbyImageData(width: 1200, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
