import React from "react";
import styled from "styled-components";

const UrlBaseImage = `${process.env.REACT_APP_IMAGE_BASE_URL}/w780`;

const Initial = styled.div`
  font-family: 'Anton', sans-serif;
  background: url(${props => UrlBaseImage + props.movie.backdrop_path}) no-repeat;
  background-size: cover;
  height: 700px;
  font-size: 22px;
  font-family: 'Anton', san-serif;
  color: white;
`

const MovieInfo = styled.div`
  position: relative;
  color: rgba(205,220,57,1);
`

const MovieContent = styled.div`
  position: absolute;
  top: 150px;
  left: 50px;
  background: rgba(38,50,56,0.5);
  padding: 10px;
`

const MovieTitle = styled.h1`
  color: rgba(255,179,0,1);
  font-family: 'Rock Salt', cursive;
`

const MovieOverview = styled.p`
  font-size: 14px;
  max-width: 300px;
`

const MovieVoteAverage = styled.span`
  color: rgba(100,221,23,1);
  font-family: 'Cinzel', serif;
`

const Loading = styled.div`
  text-align: center;
  font-size: 22px;
`

export default ({ movie }) => {
  if (movie) {
    return (
      <Initial movie={movie}>
        <MovieInfo>
          <MovieContent>
            <MovieTitle>{ movie.title }</MovieTitle>
            <MovieOverview>{ movie.overview }</MovieOverview>
            <MovieVoteAverage>{ movie.vote_average }/10</MovieVoteAverage>
          </MovieContent>
        </MovieInfo>
      </Initial>
    )
  } else {
    return (
      <Loading>Cargando...</Loading>
    )
  }
}
