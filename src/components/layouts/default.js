import React from "react"
import Container from "../styled/Container"
import { fadeInVariants } from "../../styles/framer-utils"

const Layout = ({ children }) => {
  return (
    <Container
      wide
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </Container>
  )
}

export default Layout
