import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main className="container mb-5 mt-3">{children}</main>
        <footer className="container-fluid text-muted py-2 text-center bg-light fixed-bottom">
          © {new Date().getFullYear()} {data.site.siteMetadata.author}, Built
          with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
