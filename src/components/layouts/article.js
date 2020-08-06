import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"
import TableOfContents from "../toc/TableOfContents"
import StretchedColumn from "../styled/StretchedColumn"

const ArticleLayout = props => {
  const { data } = props
  const title = data.mdx.frontmatter.title
  const tocItems = data.mdx.tableOfContents.items
  return (
    <StretchedColumn
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Seo title={title} />
      {title ? <h1>{title}</h1> : null}
      {tocItems ? <TableOfContents links={tocItems} /> : null}
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
