import styled from "styled-components"
import { widths, mediaQueries } from "../../styles/variables"

const ColumnContainer = styled.div`
  margin: 10px;
  width: calc(100% - 20px);
  @media ${mediaQueries.desktopUp} {
    margin: 0 auto;
    width: ${widths.desktop};
  }
`
export default ColumnContainer
