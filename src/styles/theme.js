import React from "react"
import GlobalStyles from "./global-styles"
import RootContainer from "../components/styled/RootContainer"

export const ThemeWrapper = ({ children }) => {
  return (
    <RootContainer>
      <GlobalStyles />
      {children}
    </RootContainer>
  )
}
