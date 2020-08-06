import styled from "styled-components"
import { widths, mediaQueries } from "../../styles/variables"
import { motion } from "framer-motion"

const ColumnContainer = styled(motion.div)`
  margin: 10px;
  width: calc(100% - 20px);
  @media ${mediaQueries.largeDesktopUp} {
    margin: 0 auto;
    width: ${widths.largeDesktop};
  }
`
export default ColumnContainer
