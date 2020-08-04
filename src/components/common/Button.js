import styled from "styled-components"
import { colors, fonts } from "../../styles/variables"

export default styled.button`
  border: 3px solid ${colors.secondary};
  border-radius: 100px;
  padding: 0.2em 0.5em;
  background-color: ${colors.white};
  color: ${colors.secondary};
  font-family: ${fonts.special};
  cursor: pointer;
  font-size: 0.9em;
  margin: 1rem 0;
  font-weight: 400;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.white};
    background-color: ${colors.secondary};
  }
`
