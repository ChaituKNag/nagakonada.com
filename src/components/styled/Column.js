import styled from "styled-components"

export default styled.div`
  flex: ${props => props.flex || "0"};
  flex-basis: ${props => props.width || "auto"};
`
