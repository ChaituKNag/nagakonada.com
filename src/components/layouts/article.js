import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import StretchedColumn from "../styled/StretchedColumn"

const ArticleLayout = ({ children }) => {
  return (
    <ThemeWrapper>
      <StretchedColumn>{children}</StretchedColumn>
      <footer>this is the article layout</footer>
    </ThemeWrapper>
  )
}

export default ArticleLayout
