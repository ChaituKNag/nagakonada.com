import styled from "styled-components"
import { widths, mediaQueries } from "../../styles/variables"
import { motion } from "framer-motion"

const Container = styled(motion.div)`
  margin: 10px;
  max-width: ${props => (props.wide ? "100%" : "60ch")};
  padding: 0 0.5rem;

  width: calc(100% - 20px);

  flex: 1;

  @media ${props =>
      props.wide ? mediaQueries.largeDesktopUp : mediaQueries.desktopUp} {
    margin: ${props => (props.margin ? props.margin : "2rem auto")};
    width: ${props => (props.wide ? widths.largeDesktop : widths.desktop)};
  }
`
export default Container
