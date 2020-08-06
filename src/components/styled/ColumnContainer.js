import styled from "styled-components"
import { widths, mediaQueries } from "../../styles/variables"
import { motion } from "framer-motion"

const ColumnContainer = styled(motion.div)`
  margin: 10px;
  width: calc(100% - 20px);
  max-width: 60ch;
  padding: 0 0.5rem;
  @media ${mediaQueries.desktopUp} {
    margin: 2rem auto;
    width: ${widths.desktop};
  }
`
export default ColumnContainer
