import React from "react"
import styled from "styled-components"
import WideColumnContainer from "../styled/WideColumnContainer"
import Row from "../styled/Row"
import Column from "../styled/Column"
import { fonts, colors, mediaQueries } from "../../styles/variables"
import { Link, navigate } from "gatsby"

const HeaderWrapper = styled.header`
  background-color: #eee;
  padding: 0 0.5rem;
`

const HeaderTitle = styled.h4`
  margin: 0.25em 0 0;
  cursor: pointer;

  font-size: 1.5rem;
  color: ${colors.secondary};

  @media ${mediaQueries.desktopUp} {
    font-size: 2rem;
  }
`

const HeaderCaption = styled.span`
  font-family: ${fonts.special};
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${colors.secondary};
  font-weight: bold;
  margin: 0 0.5em;
  border-bottom: 5px solid transparent;
  &:focus,
  &:active,
  &:hover,
  &.active {
    border-bottom: 5px solid ${colors.primary};
  }
`

const Header = () => {
  const goHome = () => navigate("/")
  return (
    <HeaderWrapper>
      <WideColumnContainer>
        <Row>
          <Column flex={1}>
            <HeaderTitle onClick={goHome}>Naga Konada</HeaderTitle>
            <HeaderCaption>I code UI. I React! </HeaderCaption>
          </Column>
          <Column width="200px">
            <nav>
              <Row justify="space-between">
                <HeaderLink activeClassName="active" to="/all-blogs">
                  Blogs
                </HeaderLink>
                <HeaderLink activeClassName="active" to="/all-articles">
                  Articles
                </HeaderLink>
                <HeaderLink activeClassName="active" to="/all-tutorials">
                  Tutorials
                </HeaderLink>
              </Row>
            </nav>
          </Column>
        </Row>
      </WideColumnContainer>
    </HeaderWrapper>
  )
}

export default Header
