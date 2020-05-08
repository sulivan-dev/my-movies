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

const ClearBottom = styled.a`
  color: white;
  cursor: pointer;
`

export default ({ onChangeSearch, clear, textSearch }) => {
  return(
    <SearchContainer>
      <i className="fa fa-search fa-lg" aria-hidden="true"/>
      <SearchInput placeholder="Buscar" onChange={ onChangeSearch } value={textSearch}/>
      <ClearBottom onClick={clear}>
        <i className="fa fa-close fa-lg" aria-hidden="true"/>
      </ClearBottom>
    </SearchContainer>
  )
}
