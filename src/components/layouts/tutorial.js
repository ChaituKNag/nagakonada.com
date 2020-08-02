import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import StretchedColumn from "../styled/StretchedColumn"
import Footer from "../common/Footer"
import Header from "../common/Header"

const TutorialLayout = ({ children }) => {
  return (
    <ThemeWrapper>
      <Header />
      <StretchedColumn>{children}</StretchedColumn>
      <Footer />
    </ThemeWrapper>
  )
}

export default TutorialLayout
