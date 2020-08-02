import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import StretchedColumn from "../styled/StretchedColumn"
import Header from "../common/Header"
import Footer from "../common/Footer"

const Layout = ({ children }) => {
  return (
    <ThemeWrapper>
      <Header />
      <StretchedColumn>{children}</StretchedColumn>
      <Footer />
    </ThemeWrapper>
  )
}

export default Layout
