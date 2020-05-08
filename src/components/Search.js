import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  padding: 5px;
  border: 1px solid white;
  
`
const SearchInput = styled.input`
  background: none;
  border: none;
  height: 22px;
  color: yellow;
  width: 200px;
  margin-left: 8px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #ffca28;
  }
`

export default ({ onChangeSearch }) => {
  return(
    <SearchContainer>
      <i className="fa fa-search fa-lg" aria-hidden="true"/>
      <SearchInput placeholder="Buscar" onChange={ onChangeSearch }/>
    </SearchContainer>
  )
}
