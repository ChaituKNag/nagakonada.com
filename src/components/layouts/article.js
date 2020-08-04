import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import Header from "../common/Header"
import StretchedColumn from "../styled/StretchedColumn"
import Footer from "../common/Footer"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../common/Seo"

const ArticleLayout = props => {
  const { data } = props
  return (
    <ThemeWrapper>
      <Seo title={data.mdx.frontmatter.title} />
      <Header />
      <StretchedColumn>
        {data.mdx.frontmatter.title ? (
          <h1>{data.mdx.frontmatter.title}</h1>
        ) : null}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </StretchedColumn>
      <Footer />
    </ThemeWrapper>
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
