import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import ColumnContainer from "../styled/ColumnContainer"

const ArticleLayout = ({ children }) => {
  return (
    <ThemeWrapper>
      <ColumnContainer>{children}</ColumnContainer>
      <footer>this is the article layout</footer>
    </ThemeWrapper>
  )
}

export default ArticleLayout
