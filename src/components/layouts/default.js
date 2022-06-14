import React from "react"
import Footer from "../common/Footer"
import Header from "../common/Header"

const Layout = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 xxl:px-0">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
