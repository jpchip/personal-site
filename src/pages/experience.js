import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Experience</h1>
    <div className="card-deck mt-3">
		<div className="card ">
			<div className="card-header">
				Front-End
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">StencilJS</li>
				<li className="list-group-item">Angular</li>
				<li className="list-group-item">React</li>
				<li className="list-group-item">Backbone.js</li>
				<li className="list-group-item">Durandal</li>
			</ul>
		</div>
		<div className="card">
			<div className="card-header">
				Back-End
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Laravel (PHP)</li>
				<li className="list-group-item">Express (Node)</li>
				<li className="list-group-item">Docker/Rancher</li>
				<li className="list-group-item">MySQL</li>
				<li className="list-group-item">PostgreSQL</li>
			</ul>
		</div>
		<div className="card">
			<div className="card-header">
				Other
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Cartography</li>
				<li className="list-group-item">Team Leadership</li>
				<li className="list-group-item">Project Management</li>
				<li className="list-group-item">Communication</li>
				<li className="list-group-item">Problem Solving</li>
			</ul>
		</div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
