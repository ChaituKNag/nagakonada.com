import React, { Fragment } from "react"
import StretchedColumn from "../styled/StretchedColumn"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"

const TutorialLayout = ({ data }) => {
  return (
    <Fragment>
      <Seo title={data.mdx.frontmatter.title} />
      <StretchedColumn>
        {data.mdx.frontmatter.title ? (
          <h1>{data.mdx.frontmatter.title}</h1>
        ) : null}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </StretchedColumn>
    </Fragment>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      slug
      frontmatter {
        title
        date(fromNow: true)
        intro
      }
      timeToRead
      tableOfContents
      body
      id
    }
  }
`

export default TutorialLayout
