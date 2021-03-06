import React from "react"
import Layout from "../components/layouts/default"
import ItemsGridContainer from "../components/items-grid/ItemsGridContainer"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/common/Seo"
import { mapItem } from "../utils/map-md-item"

const AllArticles = () => {
  const {
    allMdx: { edges: articles },
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.*content/articles/.*/" } }
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
      <Seo title="All articles" />
      <h1>All articles</h1>
      <ItemsGridContainer
        items={articles.map(mapItem)}
        itemUrlPrefix="/article/"
        noItemsMessage="We are churning the articles, please do come back later!"
      />
    </Layout>
  )
}

export default AllArticles
