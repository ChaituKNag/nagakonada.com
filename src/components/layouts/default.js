import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import WideStretchedColumn from "../styled/WideStretchedColumn"
import Header from "../common/Header"
import Footer from "../common/Footer"

const Layout = ({ children }) => {
  return (
    <ThemeWrapper>
      <Header />
      <WideStretchedColumn>{children}</WideStretchedColumn>
      <Footer />
    </ThemeWrapper>
  )
}

export default Layout
