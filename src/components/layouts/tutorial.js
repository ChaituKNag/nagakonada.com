import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import ColumnContainer from "../styled/ColumnContainer"

const TutorialLayout = ({ children }) => {
  return (
    <ThemeWrapper>
      <ColumnContainer>{children}</ColumnContainer>
      <footer>this is the tutorial layout</footer>
    </ThemeWrapper>
  )
}

export default TutorialLayout
