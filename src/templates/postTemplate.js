import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <section>
        <div>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export default PostTemplate

export const Head = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Seo
      title={frontmatter.title}
      keywords={[`post`, ...(frontmatter.tags || [])]}
    />
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
