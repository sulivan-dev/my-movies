import React from "react";
import styled from "styled-components";

const UrlBaseImage = 'https://image.tmdb.org/t/p/w185';

const Container = styled.div`
 border: 2px solid gold;
 margin: 2px;
`

const Photo = styled.img``

const Name = styled.span`
 background: rgba(0,0,0,0.5);
 color: white;
`

export default ({ actor }) => {
 return (
   <Container>
    <Photo src={ actor.profile_path ? UrlBaseImage + actor.profile_path : "http://dummyimage.com/185&text=no_image"}>
    </Photo>
    <Name>{ actor.name }</Name>
   </Container>
 )
}
