import React from "react"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { fonts, colors } from "../../styles/variables"

const TOCWrapper = styled.div`
  margin-bottom: 2rem;
`

const TOCListItem = styled.li`
  list-style: none;
  position: relative;
  color: ${props => (props.current ? colors.secondary : colors.primary)};
  &::before {
    content: "⦾";
    position: absolute;
    left: -1rem;
    top: 0;
    color: currentColor;
  }
`

const TOCLink = styled.a`
  font-size: 0.8rem;
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
      <h4>Table of contents</h4>
      <ul>
        {links.map((link, i) => (
          <TOCListItem
            key={`${link.url}-${i}`}
            current={location.hash === link.url}
          >
            <TOCLink href={link.url}>{link.title}</TOCLink>
          </TOCListItem>
        ))}
      </ul>
    </TOCWrapper>
  )
}

export default TableOfContents
