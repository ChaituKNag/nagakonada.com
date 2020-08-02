import styled from "styled-components"
import { colors, fonts } from "../../styles/variables"

export default styled.button`
  border: 3px solid ${colors.secondary};
  border-radius: 100px;
  padding: 0.4em;
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-family: ${fonts.special};
  cursor: pointer;
  font-size: 1em;
  margin: 1rem 0;
  font-weight: 800;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.secondary};
    background-color: ${colors.white};
  }
`
