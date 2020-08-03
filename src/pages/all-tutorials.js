import React from "react"
import Layout from "../components/layouts/default"
import ItemsGridContainer from "../components/items-grid/ItemsGridContainer"
import { useStaticQuery, graphql } from "gatsby"

const AllArticles = () => {
  const {
    allMdx: { edges: blogs },
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.*content/tutorials/.*/" } }
      ) {
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
        noItemsMessage="These are exciting times, please stick around!!"
      />
    </Layout>
  )
}

export default AllArticles
