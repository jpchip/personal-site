import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/js/bootstrap.js';

import Header from "./header"
import '../styles/styles.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main className="container mb-5 mt-3">{children}</main>
          <footer className="container-fluid text-muted py-1 text-center bg-light fixed-bottom">
            © {new Date().getFullYear()} {data.site.siteMetadata.author}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
