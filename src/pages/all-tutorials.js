import React from "react"
import Layout from "../components/layouts/default"
import ItemsGridContainer from "../components/items-grid/ItemsGridContainer"
import { useStaticQuery, graphql } from "gatsby"

const AllTutorials = () => {
  const {
    allMdx: { edges: tutorials },
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
        items={tutorials}
        itemUrlPrefix="/tutorial/"
        noItemsMessage="These are exciting times, please stick around!!"
      />
    </Layout>
  )
}

export default AllTutorials
