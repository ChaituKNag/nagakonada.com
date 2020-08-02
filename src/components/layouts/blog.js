import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import StretchedColumn from "../styled/StretchedColumn"
import Header from "../common/Header"
import Footer from "../common/Footer"

const BlogLayout = ({ pageContext, children }) => {
  return (
    <ThemeWrapper>
      <Header />
      <StretchedColumn>
        {pageContext.frontmatter.title ? (
          <h1>{pageContext.frontmatter.title}</h1>
        ) : null}
        {children}
      </StretchedColumn>
      <Footer />
    </ThemeWrapper>
  )
}

export default BlogLayout
