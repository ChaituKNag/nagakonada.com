import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import StretchedColumn from "../styled/StretchedColumn"

const TutorialLayout = ({ children }) => {
  return (
    <ThemeWrapper>
      <StretchedColumn>{children}</StretchedColumn>
      <footer>this is the tutorial layout</footer>
    </ThemeWrapper>
  )
}

export default TutorialLayout
