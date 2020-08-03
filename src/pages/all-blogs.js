import React from "react"
import Layout from "../components/layouts/default"
import ItemsGridContainer from "../components/items-grid/ItemsGridContainer"
import { useStaticQuery, graphql } from "gatsby"

const AllArticles = () => {
  const {
    allMdx: { edges: blogs },
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/.*content/blogs/.*/" } }) {
        edges {
          node {
            slug
            frontmatter {
              title
              date(fromNow: true)
              intro
            }
            timeToRead
            tableOfContents
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ItemsGridContainer
        items={blogs}
        noItemsMessage="I'm still thinking what to write..."
      />
    </Layout>
  )
}

export default AllArticles
