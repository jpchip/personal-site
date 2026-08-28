import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse, NavbarToggler } from "reactstrap"

const Header = ({ siteTitle }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          {siteTitle}
        </Link>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse
          isOpen={!collapsed}
          navbar
          className="justify-content-end"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                activeClassName="active"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experience"
                className="nav-link"
                activeClassName="active"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" activeClassName="active">
                Thoughts
              </Link>
            </li>
          </ul>
        </Collapse>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
