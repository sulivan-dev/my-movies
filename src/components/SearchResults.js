import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UrlBaseImage = `${process.env.REACT_APP_IMAGE_BASE_URL}/w185`;

const Container = styled.div`
  display: flex;
  background: black;
  flex-wrap: wrap;
`

const Item = styled(Link)`
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
          <Item key={movie.id} movie={ movie } to={`/detail/${movie.id}`}/>
        ))
      }
    </Container>
  )
}
