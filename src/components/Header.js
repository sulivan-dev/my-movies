import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  background: rgba(0,0,0,0.5);
  color: white,
  
  > h3 {
    margin-left: 20px;
  }
`

export default () => {
  return (
    <Container>
      <h3>That's my movie</h3>
    </Container>
  )
}