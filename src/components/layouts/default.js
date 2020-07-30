import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import StretchedColumn from "../styled/StretchedColumn"
import Header from "../common/Header"

const Layout = ({ children }) => {
  return (
    <ThemeWrapper>
      <Header />
      <StretchedColumn>{children}</StretchedColumn>
    </ThemeWrapper>
  )
}

export default Layout
