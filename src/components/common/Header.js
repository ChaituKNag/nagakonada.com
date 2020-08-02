import React from "react"
import styled from "styled-components"
import WideColumnContainer from "../styled/WideColumnContainer"
import Row from "../styled/Row"
import { fonts, colors, mediaQueries } from "../../styles/variables"
import { Link, navigate } from "gatsby"

const HeaderWrapper = styled.header`
  background-color: ${colors.light};
  padding: 0 0.5rem;
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-direction: column;
  @media ${mediaQueries.largeDesktopUp} {
    flex-direction: row;
  }
`

const TitleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mediaQueries.largeDesktopUp} {
    align-items: flex-start;
  }
`

const HeaderTitle = styled.h4`
  margin: 0.25em 0 0;
  cursor: pointer;

  font-size: 1.3rem;
  color: ${colors.secondary};

  @media ${mediaQueries.desktopUp} {
    font-size: 1.4rem;
  }
`

const HeaderCaption = styled.span`
  font-family: ${fonts.special};
`

const LinksSection = styled.div`
  flex: 0;
  flex-basis: 0;

  @media ${mediaQueries.largeDesktopUp} {
    flex-basis: 200px;
  }
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
        <HeaderRow>
          <TitleSection>
            <HeaderTitle onClick={goHome}>Naga Konada</HeaderTitle>
            <HeaderCaption>I code UI. I React! </HeaderCaption>
          </TitleSection>
          <LinksSection>
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
          </LinksSection>
        </HeaderRow>
      </WideColumnContainer>
    </HeaderWrapper>
  )
}

export default Header
