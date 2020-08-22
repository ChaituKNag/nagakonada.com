import React from "react"
import Layout from "../components/layouts/default"
import ItemsGridContainer from "../components/items-grid/ItemsGridContainer"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/common/Seo"
import { mapItem } from "../utils/map-md-item"

const AllBlogs = () => {
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
      <Seo title="All blogs" />
      <ItemsGridContainer
        items={blogs.map(mapItem)}
        itemUrlPrefix="/blog/"
        noItemsMessage="I'm still thinking what to write..."
      />
    </Layout>
  )
}

export default AllBlogs
