import styled from "styled-components"

export default styled.div`
  display: flex;
  justify-content: ${props => props.justify || "stretch"};
  align-items: center;
  flex-wrap: ${props => props.wrap || "no-wrap"};
`
