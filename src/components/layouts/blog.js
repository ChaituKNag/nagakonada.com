import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import ColumnContainer from "../styled/ColumnContainer"

const BlogLayout = ({ pageContext, children }) => {
  return (
    <ThemeWrapper>
      <header>Title: {pageContext.frontmatter.title || ""}</header>
      <ColumnContainer>{children}</ColumnContainer>
      <footer>this is the blog layout</footer>
    </ThemeWrapper>
  )
}

export default BlogLayout
