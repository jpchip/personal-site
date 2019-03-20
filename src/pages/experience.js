import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Experience</h1>
    <div className="card-deck mt-3">
		<div class="card ">
			<div class="card-header">
				Front-End
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">StencilJS</li>
				<li class="list-group-item">Angular</li>
				<li class="list-group-item">React</li>
				<li class="list-group-item">Backbone</li>
				<li class="list-group-item">Durandal</li>
			</ul>
		</div>
		<div class="card">
			<div class="card-header">
				Back End
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Laravel (PHP)</li>
				<li class="list-group-item">Express (Node)</li>
				<li class="list-group-item">Docker/Rancher</li>
				<li class="list-group-item">MySQL</li>
				<li class="list-group-item">PostgresQL</li>
			</ul>
		</div>
		<div class="card">
			<div class="card-header">
				Other
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Cartography</li>
				<li class="list-group-item">Communication</li>
				<li class="list-group-item">Project Management</li>
				<li class="list-group-item">Statistics</li>
				<li class="list-group-item">Problem Solving</li>
			</ul>
		</div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
