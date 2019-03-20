import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
	  <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
		  <Link
			  to="/"
			  className="navbar-brand"
		  >
			  {siteTitle}
		  </Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
					  <Link
						  to="/blog"
						  className="nav-link"
						  activeClassName="active"
					  >
						  Blog
					  </Link>
				  </li>
			  </ul>
		  </div>
	  </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
