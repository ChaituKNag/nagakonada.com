import styled from "styled-components"
import { motion } from "framer-motion"
import { mediaQueries, widths } from "../../styles/variables"

export const ContentsContainer = styled(motion.div)`
  display: grid;
  grid-template-areas:
    "goback"
    "title"
    "toc"
    "reading";
  grid-template-columns: 1fr;

  margin: 10px;
  padding: 0 0.5rem;
  position: relative;
  flex: 1;
  margin-bottom: 5rem;

  @media ${mediaQueries.largeDesktopUp} {
    grid-template-columns: ${props =>
        props.tocPresent ? "minmax(250px, 1fr)" : "0px"} 3fr;
    grid-template-areas:
      ". goback"
      ". title"
      "toc reading";
    max-width: ${props => (props.tocPresent ? "auto" : widths.largeDesktop)};
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`

export const ReadingTitle = styled(motion.h1)`
  grid-area: title;
  margin-top: 0;
`

export const ReadingContainer = styled.main`
  grid-area: reading;
  width: 100%;
  max-width: 60ch;
`

export const GoBackSection = styled.div`
  grid-area: goback;
  margin-top: 2rem;
`
