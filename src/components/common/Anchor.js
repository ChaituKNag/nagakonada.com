import styled from "styled-components"
import { colors, fonts } from "../../styles/variables"
import { motion } from "framer-motion"

export default styled(motion.a)`
  color: ${props => props.color || colors.secondary};
  font-family: ${fonts.body};
  font-weight: 800;
  text-decoration: none;
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 3px;
    background-color: ${props => props.underlineColor || `currentColor`};
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
