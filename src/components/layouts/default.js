import React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {children}
    </div>
  )
}

export default Layout
