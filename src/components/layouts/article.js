import React from "react"
import StretchedColumn from "../styled/StretchedColumn"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"

const ArticleLayout = props => {
  const { data } = props
  return (
    <StretchedColumn
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Seo title={data.mdx.frontmatter.title} />
      {data.mdx.frontmatter.title ? (
        <h1>{data.mdx.frontmatter.title}</h1>
      ) : null}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </StretchedColumn>
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

export default ArticleLayout
