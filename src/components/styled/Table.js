import styled from "styled-components"
import { colors } from "../../styles/variables"

const Table = styled.table`
  border: 1px solid ${colors.secondary};
  overflow: scroll;
`

Table.tr = styled.tr`
  border-bottom: 1px solid ${colors.secondary};
`

Table.th = styled.th`
  border-right: 1px solid ${colors.secondary};

  &:first-child {
    border-left: 1px solid ${colors.secondary};
  }
`

Table.td = styled.td`
  border-right: 1px solid ${colors.secondary};

  &:first-child {
    border-left: 1px solid ${colors.secondary};
  }
`
export default Table
