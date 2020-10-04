import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../styles/variables"

export default styled(Link)`
  text-decoration: none;
  color: ${colors.secondary};
  font-weight: bold;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 4px;
    background-color: ${colors.primary};
    transition: transform 200ms ease-in-out;
    transform-origin: right;
  }

  &:focus::after,
  &:active::after,
  &:hover::after,
  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`
