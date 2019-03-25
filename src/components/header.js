import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Collapse, NavbarToggler} from 'reactstrap';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
					<Link
						to="/"
						className="navbar-brand"
					>
						{this.props.siteTitle}
					</Link>
					<NavbarToggler onClick={this.toggleNavbar} />
					<Collapse isOpen={!this.state.collapsed} navbar className="justify-content-end">
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
					</Collapse>
				</nav>
			</header>
		);
	}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
