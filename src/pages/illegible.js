import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import Layout from "../components/layout"
const IllegiblePage = ({ data }) => {
  const allPosts = data.allIllegiblePost.edges

  return (
    <Layout>
      <div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title">Illegible Posts</h1>
            <h5 className="card-title">Maybe I can get your help?</h5>
            <p className="card-text">
              A few years ago I transcribed the diary of Levi Chapiewsky, my
              great grandfather, chronicling his time in the pacific during
              World War II. I was able to get most of his entries, but there are
              a few with words I just couldn't make out. If you could take a
              look and add a comment on the post if you have a guess as to what
              the words say? I'd really appreciate the help!
            </p>
            <p className="card-text">
              Click on a entry below to view the full post.
            </p>
          </div>
        </div>

        <div className="list-group illegible-posts">
          {allPosts.map(post => (
            <a
              href={post.node.link}
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
              key={post.node.id}
            >
              <h5>{post.node.title}</h5>
              <div
                className="postContent"
                dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
              />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IllegiblePage

export const Head = () => (
  <Seo
    title="Illegible Posts"
    keywords={[`blog`, `help`, `illegible`, `posts`, `WWII`, `diary`]}
    bodyClass="stars"
  />
)

export const pageQuery = graphql`
  query {
    allIllegiblePost {
      edges {
        node {
          id
          title
          link
          excerpt
        }
      }
    }
  }
`
