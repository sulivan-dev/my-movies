import React from "react";
import styled from "styled-components";

import SectionTitle from "./SectionTitle";
import Actor from "./Actor";

const Container = styled.div`
  display: flex;
  overflow: scroll;
`

export default ({ cast }) => {
  if (cast) {
    return (
      <div>
        <SectionTitle>Reparto:</SectionTitle>
        <Container>
          {
            cast.map(actor => (
              <Actor actor={actor}/>
            ))
          }
        </Container>
      </div>
    )
  } else {
    return (
      <div>Cargando...</div>
    )
  }
}
