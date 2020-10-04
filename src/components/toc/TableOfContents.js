import React from "react"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { fonts, colors, mediaQueries } from "../../styles/variables"

const TOCWrapper = styled.div`
  margin-bottom: 2rem;
  grid-area: toc;
  text-align: left;

  @media ${mediaQueries.largeDesktopUp} {
    text-align: right;
    margin-right: 2rem;
  }
`

const TOCFloatingContainer = styled.div`
  position: sticky;
  top: 0;
`

const TOCHeading = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
`

const TOCList = styled.ul`
  list-style-type: none;
  margin: 0;
`

const TOCListItem = styled.li`
  position: relative;
  color: ${colors.secondary};
  text-decoration: ${props => (props.current ? "underline" : "none")};
`

const TOCLink = styled.a`
  font-size: 0.9rem;
  font-family: ${fonts.special};
  margin-left: 0.5em;
  text-decoration: none;
  color: inherit;
`

const TableOfContents = ({ links }) => {
  const location = useLocation()
  console.log(location)
  return (
    <TOCWrapper>
      <TOCFloatingContainer>
        <TOCHeading>Table of contents</TOCHeading>
        <TOCList>
          {links.map((link, i) => (
            <TOCListItem
              key={`${link.url}-${i}`}
              current={location.hash === link.url}
            >
              <TOCLink href={link.url}>{link.title}</TOCLink>
            </TOCListItem>
          ))}
        </TOCList>
      </TOCFloatingContainer>
    </TOCWrapper>
  )
}

export default TableOfContents
