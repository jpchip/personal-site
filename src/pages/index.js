import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Social from "../components/social"
import Seo from "../components/seo"

const yearsOfExperience = new Date().getFullYear() - 2006

const IndexPage = () => (
  <Layout>
    <div className="p-5 mb-4 bg-light rounded-3 mt-5 pt-3">
      <h1 className="display-4">Hello!</h1>
      <p className="lead">
        I am a Staff Software Engineer at <a href="https://www.milwaukeetool.com/">Milwaukee Tool</a>. I
        have {yearsOfExperience} years of experience with both front-end and back-end
        development. Check out my <Link to="/projects">side projects</Link>,
        read my <Link to="/blog">blog</Link>, or follow me on social media.
      </p>
      <Social />
    </div>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo title="Home" keywords={[`web`, `developer`, `programmer`]} bodyClass="ferns" />
)
