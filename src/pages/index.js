import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Social from "../components/social"
import SEO from "../components/seo"
import "font-awesome/css/font-awesome.min.css"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <body className="ferns" />
    </Helmet>
    <SEO title="Home" keywords={[`web`, `developer`, `programmer`]} />
    <div className="jumbotron mt-5 pt-3">
      <h1 className="display-4">Hello!</h1>
      <p className="lead">
        I am a Full Stack Web Developer at{" "}
        <a href="https://earthlinginteractive.com/">Earthling Interactive</a>. I
        have 15 years of experience with both front-end and back-end
        development. Check out my <Link to="/projects">side projects</Link>,
        read my <Link to="/blog">blog</Link>, or follow me on social media:
      </p>
      <Social />
    </div>
  </Layout>
)

export default IndexPage
