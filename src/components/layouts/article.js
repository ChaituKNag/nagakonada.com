import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Seo from "../common/Seo"
import TableOfContents from "../toc/TableOfContents"

const ArticleLayout = props => {
  const { data } = props
  const title = data.mdx.frontmatter.title
  const tocItems = data.mdx.tableOfContents.items

  return (
    <>
      <Seo title={title} />
      <div className="go-back">
        <Link to="/all-articles">← Go back</Link>
      </div>
      <h1>{title}</h1>
      {tocItems ? <TableOfContents links={tocItems} /> : null}
      <div className="markdown-section">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </>
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
