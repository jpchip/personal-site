import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const Experience = () => (
  <Layout>
    <Helmet>
      <body className="floor" />
    </Helmet>
    <SEO title="Experience" keywords={[`resume`, `skills`, `education`]} />
    <h1 className="text-white">Experience</h1>
    <div className="card">
      <div className="card-header">Background</div>
      <div className="card-body">
        <p>
          After graduating from the University of Wisconsin - Madison in 2005
          with a BS in Cartography and GIS, I joined Earthling Interactive as a
          Web Developer. At Earthling, I worked on projects big and small, in a wide
          range of domains. From local pizza joints to home health care,
          precision ag to trucking, I had to jump into the deep end of
          complex systems and build applications to fit the client's needs.
        </p>
        <p>In 2019 I joined Silgan Containers as a Senior Web Developer. At Silgan I 
          helped implement best practices in coding and deployment processes, and maintained 
          business critical software to support the day to day operations of the company.
        </p>
        <p><a href="https://registry.jsonresume.org/jpchip">My Resume</a></p>
      </div>
    </div>
    <div className="card-deck align-items-baseline mt-3">
      <div className="card ">
        <div className="card-header">Front-End</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">StencilJS</li>
          <li className="list-group-item">Angular</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Backbone.js</li>
          <li className="list-group-item">Durandal</li>
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Back-End</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Laravel (PHP)</li>
          <li className="list-group-item">Express (Node)</li>
          <li className="list-group-item">ASP.NET</li>
          <li className="list-group-item">Docker/Rancher</li>
          <li className="list-group-item">MySQL</li>
          <li className="list-group-item">PostgreSQL</li>
          <li className="list-group-item">SQL Server</li>
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Other</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cartography</li>
          <li className="list-group-item">Team Leadership</li>
          <li className="list-group-item">Project Management</li>
          <li className="list-group-item">Communication</li>
          <li className="list-group-item">Problem Solving</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Experience
