import React from "react"
import WideStretchedColumn from "../styled/WideStretchedColumn"
import { fadeInVariants } from "../../styles/framer-utils"

const Layout = ({ children }) => {
  return (
    <WideStretchedColumn
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </WideStretchedColumn>
  )
}

export default Layout
