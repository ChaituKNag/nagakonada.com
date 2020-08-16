import React from "react"
import Container from "../styled/Container"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"
import TableOfContents from "../toc/TableOfContents"
import { motion } from "framer-motion"

const BlogLayout = props => {
  const { data } = props
  const title = data.mdx.frontmatter.title
  const tocItems = data.mdx.tableOfContents.items
  const slug = data.mdx.slug
  return (
    <Container
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Seo title={title} />
      {title ? <motion.h1 layoutId={`post-${slug}`}>{title}</motion.h1> : null}
      {tocItems ? <TableOfContents links={tocItems} /> : null}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Container>
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
