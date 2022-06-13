import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { colors } from "../../styles/variables"
import { mapItem } from "../../utils/map-md-item"
import Seo from "../common/Seo"
import ItemsGridContainer from "../items-grid/ItemsGridContainer"

const TutorialLayout = ({ data }) => {
  const tutorialEntries = data.allMdx.edges
  console.log(data.mdx.frontmatter.title)
  return (
    <>
      <Seo title={data.mdx.frontmatter.title} />
      <div className="go-back">
        <Link to="/all-tutorials">← Go back</Link>
      </div>
      {data.mdx.frontmatter.title ? (
        <h1>
          {data.mdx.frontmatter.title}
        </h1>
      ) : null}
      <div className="list-container">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>

        <ItemsGridContainer
          items={tutorialEntries.map(mapItem)}
          itemUrlPrefix={`/tutorial/`}
          noItemsMessage="No tutorials yet. Keep looking!"
          themeColor={colors.primary}
          list
        />
      </div>
    </>
  )
}

export const query = graphql`
  query($id: String!, $tutorialId: String!) {
    mdx(id: { eq: $id }) {
      slug
      frontmatter {
        title
        date(fromNow: true)
        intro
        tutorialId
      }
      body
    }
    allMdx(filter: { frontmatter: { tutorialParent: { eq: $tutorialId } } }) {
      edges {
        node {
          slug
          frontmatter {
            title
            date(fromNow: true)
            intro
          }
          timeToRead
        }
      }
    }
  }
`

export default TutorialLayout
