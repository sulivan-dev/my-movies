import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UrlBaseImage = `${process.env.REACT_APP_IMAGE_BASE_URL}/w154`;

const Container = styled.div`
  > ul {
    background: rgba(65,165,245,1);
    padding-left: 0;
    overflow: scroll;
    display: flex;
    margin: 0;
    align-items: strech;
  }
`

const MovieItem = styled(Link)`
  list-style: none;
  display: inline-block;
  background: url(${props => UrlBaseImage + props.movie.poster_path}) no-repeat;
  background-size: cover;
  min-width: 200px;
  margin: 5px;
  height: 300px;
  font-family: 'Amatic SC', cursive;
  color: yellow;
  font-size: 22px;
  font-weight: bold;
  
  > span {
    display: none;
    background: rgba(38,50,56,0.5)
  }
  
  &:hover {
    > span {
      display: block;
    }
  }
`

export default ({ movies }) => {
  return (
    <Container>
      <ul>
        {
          movies.map(movie => (
            <MovieItem key={ movie.id }
                       movie={movie}
                       to={`/detail/${ movie.id }`}
            >
              <span>{ movie.title }</span>
            </MovieItem>
          ))
        }
      </ul>
    </Container>
  )
}
