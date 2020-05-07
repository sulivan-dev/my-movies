import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  background: rgba(0,0,0,0.5);
  color: white;
  display: flex;
  justify-content: space-between;
  
  > h3 {
    margin-left: 20px;
  }
`

const Date = styled.div`
  
`

export default ({ date }) => {
  return (
    <Container>
      <h3>That's my movie</h3>
      <Date>{ date.toString() }</Date>
    </Container>
  )
}
