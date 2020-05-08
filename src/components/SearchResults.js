import React from "react";
import styled from "styled-components";

const UrlBaseImage = 'https://image.tmdb.org/t/p/w185';

const Container = styled.div`
  display: flex;
  background: black;
  flex-wrap: wrap;
`

const Item = styled.div`
  background: url(${ props => UrlBaseImage + props.movie.poster_path}) no-repeat;
  background-size: cover;
  height: 300px;
  width: 200px;
`

export default ({ data }) => {
  return (
    <Container>
      {
        data.map(movie => (
          <Item movie={ movie } />
        ))
      }
    </Container>
  )
}
