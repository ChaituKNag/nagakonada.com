import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../styles/variables"
import Button from "../common/Button"
import goto from "../../utils/goto-page"

const CardWrapper = styled.div`
  border: 3px solid ${colors.secondary};
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  transform: skewY(-5deg);
  background-color: white;
  position: relative;

  &::before {
    content: attr(data-date);
    position: absolute;
    transform: skewY(5deg);
    top: -20px;
    right: -20px;
    background: ${colors.white};
    padding: 10px;
    line-height: 1;
    border-radius: 5px;
    border: 2px solid ${colors.secondary};
    box-shadow: 1px 1px 5px ${colors.boxShadow};
    z-index: 1;
    font-size: 0.9em;
    font-family: ${fonts.special};

    ${props =>
      props.stacked
        ? `
    transform: none;
    right: 0;
    top: -22px;
    `
        : ""}
  }

  ${props =>
    props.stacked
      ? `
    transform: none;
    padding: 10px;
    border:none;
    border-top: 2px solid teal;
    border-radius: 0;
  `
      : ""}
`

const CardContentWrapper = styled.div`
  transform: skewY(5deg);

  ${props =>
    props.stacked
      ? `
    transform: none;
  `
      : ""}
`
const ItemCard = ({ item, stacked, urlPrefix = "/" }) => {
  return (
    <CardWrapper
      stacked={stacked}
      className="card"
      data-date={item.frontmatter.date}
    >
      <CardContentWrapper stacked={stacked} className="card-content">
        <h5>{item.frontmatter.title}</h5>
        <div>{item.frontmatter.intro}</div>
        <Button onClick={goto(urlPrefix + item.slug)}>Learn More</Button>
      </CardContentWrapper>
    </CardWrapper>
  )
}

export default ItemCard
