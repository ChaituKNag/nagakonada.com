import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Anchor from "../common/Anchor"
import Seo from "../common/Seo"
import TableOfContents from "../toc/TableOfContents"

const TutorialLayout = ({ data, context }) => {
  const slug = data.mdx.slug
  const tocItems = data.mdx.tableOfContents.items
  const seriesId = data.mdx.frontmatter.tutorialParent
  console.log(data)
  return (
    <>
      <Seo title={data.mdx.frontmatter.title} />
      <div className="go-back">
        <Link to={`/tutorial/${seriesId}`}>← Go back</Link>
      </div>
      {data.mdx.frontmatter.title ? (
        <h1 layoutId={`post-${slug}`}>
          {data.mdx.frontmatter.title}
        </h1>
      ) : null}
      {tocItems ? <TableOfContents links={tocItems} /> : null}
      <div className="details-section">
        <MDXProvider
          components={{
            Anchor: Anchor,
          }}
        >
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
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
