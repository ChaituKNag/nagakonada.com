import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"
import TableOfContents from "../toc/TableOfContents"
import {
  ContentsContainer,
  ReadingContainer,
  ReadingTitle,
} from "../styled/Contents"

const BlogLayout = props => {
  const { data } = props
  const title = data.mdx.frontmatter.title
  const tocItems = data.mdx.tableOfContents.items
  const slug = data.mdx.slug
  return (
    <ContentsContainer
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      tocPresent={!!tocItems}
    >
      <Seo title={title} />
      <ReadingTitle layoutId={`post-${slug}`}>{title}</ReadingTitle>
      {tocItems ? <TableOfContents links={tocItems} /> : null}
      <ReadingContainer>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </ReadingContainer>
    </ContentsContainer>
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

export default BlogLayout
