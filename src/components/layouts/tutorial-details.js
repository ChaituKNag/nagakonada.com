import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"
import {
  ContentsContainer,
  ReadingContainer,
  ReadingTitle,
} from "../styled/Contents"
import TableOfContents from "../toc/TableOfContents"

const TutorialLayout = ({ data }) => {
  const slug = data.mdx.slug
  const tocItems = data.mdx.tableOfContents.items
  console.log(data)
  return (
    <ContentsContainer
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      tocPresent={!!tocItems}
    >
      <Seo title={data.mdx.frontmatter.title} />
      {data.mdx.frontmatter.title ? (
        <ReadingTitle layoutId={`post-${slug}`}>
          {data.mdx.frontmatter.title}
        </ReadingTitle>
      ) : null}
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

export default TutorialLayout
