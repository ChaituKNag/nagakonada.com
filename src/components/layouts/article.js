import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import Header from "../common/Header"
import StretchedColumn from "../styled/StretchedColumn"

const ArticleLayout = ({ pageContext, children }) => {
  return (
    <ThemeWrapper>
      <Header />
      <StretchedColumn>
        {pageContext.frontmatter.title ? (
          <h1>{pageContext.frontmatter.title}</h1>
        ) : null}
        {children}
      </StretchedColumn>
      <footer>this is the article layout</footer>
    </ThemeWrapper>
  )
}

export default ArticleLayout
