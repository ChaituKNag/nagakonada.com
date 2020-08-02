import React from "react"
import { widths, colors, fonts } from "../../styles/variables"
import styled from "styled-components"

const SwapperContainer = styled.div`
  margin: 2rem 0 3rem;
  display: flex;
  justify-content: flex-end;
`

const SwapperButton = styled.button`
  padding: 0.5em;
  background-color: ${colors.white};
  border: 2px solid ${colors.secondary};
  font-family: ${fonts.special};
`

const ListSwapperButton = styled(SwapperButton)`
  border-right-width: 1px;
  border-radius: 100px 0 0 100px;
  ${props =>
    props.selected === "list"
      ? `
  background: ${colors.secondary};
  color: ${colors.white};
  `
      : ""}
`
const GridSwapperButton = styled(SwapperButton)`
  border-left-width: 1px;
  border-radius: 0 100px 100px 0;
  ${props =>
    props.selected === "grid"
      ? `
  background: ${colors.secondary};
  color: ${colors.white};
  `
      : ""}
`

const GridSwapper = ({ selected, onSelect }) => (
  <SwapperContainer>
    <ListSwapperButton selected={selected} onClick={onSelect("list")}>
      List
    </ListSwapperButton>
    <GridSwapperButton selected={selected} onClick={onSelect("grid")}>
      Grid
    </GridSwapperButton>
  </SwapperContainer>
)

export default GridSwapper
