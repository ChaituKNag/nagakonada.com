import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import Header from "../common/Header"
import StretchedColumn from "../styled/StretchedColumn"
import Footer from "../common/Footer"

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
      <Footer />
    </ThemeWrapper>
  )
}

export default ArticleLayout
