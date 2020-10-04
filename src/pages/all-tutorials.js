import React from "react"
import Layout from "../components/layouts/default"
import ItemsGridContainer from "../components/items-grid/ItemsGridContainer"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/common/Seo"
import { colors } from "../styles/variables"
import { mapItem } from "../utils/map-md-item"

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
      <Seo title="All tutorials" />
      <h1>All tutorials</h1>
      <ItemsGridContainer
        items={tutorials.map(mapItem)}
        itemUrlPrefix="/tutorial/"
        noItemsMessage="These are exciting times, please stick around!!"
        themeColor={colors.primary}
      />
    </Layout>
  )
}

export default AllTutorials
