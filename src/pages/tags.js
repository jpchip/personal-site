// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"

import Layout from "../components/layout"

const kebabCase = str =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group

  return (
    <Layout>
      <div>
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const Head = () => <Seo title="Tags" />

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
