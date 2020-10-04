import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Anchor from "../common/Anchor"
import Seo from "../common/Seo"
import { fadeInVariants } from "../../styles/framer-utils"
import {
  ContentsContainer,
  ReadingContainer,
  ReadingTitle,
  GoBackSection,
} from "../styled/Contents"
import TableOfContents from "../toc/TableOfContents"
import Link from "../common/Link"

const TutorialLayout = ({ data, context }) => {
  const slug = data.mdx.slug
  const tocItems = data.mdx.tableOfContents.items
  const seriesId = data.mdx.frontmatter.tutorialParent
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
      <GoBackSection>
        <Link to={`/tutorial/${seriesId}`}>← Go back</Link>
      </GoBackSection>
      {data.mdx.frontmatter.title ? (
        <ReadingTitle layoutId={`post-${slug}`}>
          {data.mdx.frontmatter.title}
        </ReadingTitle>
      ) : null}
      {tocItems ? <TableOfContents links={tocItems} /> : null}
      <ReadingContainer>
        <MDXProvider
          components={{
            Anchor: Anchor,
          }}
        >
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
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
        tutorialParent
      }
      timeToRead
      tableOfContents
      body
      id
    }
  }
`

export default TutorialLayout
