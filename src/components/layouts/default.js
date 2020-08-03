import React from "react"
import { ThemeWrapper } from "../../styles/theme"
import WideStretchedColumn from "../styled/WideStretchedColumn"
import Header from "../common/Header"
import Footer from "../common/Footer"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation()
  console.log(location)
  return (
    <ThemeWrapper>
      <Header home={location.pathname === "/"} />
      <WideStretchedColumn>{children}</WideStretchedColumn>
      <Footer />
    </ThemeWrapper>
  )
}

export default Layout
