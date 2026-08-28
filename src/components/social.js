import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Social = () => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        edges {
          node {
            id
            title
            link
            icon
          }
        }
      }
    }
  `)

  return (
    <ul className="social-icons-list list-group list-group-horizontal list-group-flush">
      {data.allSocialJson.edges.map(social => (
        <li key={social.node.id}>
          <a
            href={social.node.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.node.title}
            className="list-group-item bg-transparent list-group-item-action text-center flex-fill"
          >
            <i className={social.node.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
