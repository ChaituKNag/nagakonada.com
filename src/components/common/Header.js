import React from "react"
import styled from "styled-components"
import WideColumnContainer from "../styled/WideColumnContainer"
import Row from "../styled/Row"
import Column from "../styled/Column"
import { fonts, colors } from "../../styles/variables"
import { Link } from "gatsby"

const HeaderWrapper = styled.header`
  background-color: #eee;
  padding: 0 0.5rem;
`

const HeaderTitle = styled.h4`
  margin-bottom: 0;
`

const HeaderCaption = styled.span`
  font-family: ${fonts.special};
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${colors.secondary};
  font-weight: bold;
  padding: 0 0.5em;
  border-bottom: 5px solid transparent;
  &:focus,
  &:active,
  &:hover {
    border-bottom: 5px solid ${colors.primary};
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <WideColumnContainer>
        <Row>
          <Column flex={1}>
            <HeaderTitle>Naga Chaitanya Konada</HeaderTitle>
            <HeaderCaption>I code UI. I React! </HeaderCaption>
          </Column>
          <Column width="200px">
            <nav>
              <Row justify="space-between">
                <HeaderLink to="/all-blogs">Blogs</HeaderLink>
                <HeaderLink to="/all-articles">Articles</HeaderLink>
                <HeaderLink to="/all-tutorials">Tutorials</HeaderLink>
              </Row>
            </nav>
          </Column>
        </Row>
      </WideColumnContainer>
    </HeaderWrapper>
  )
}

export default Header
