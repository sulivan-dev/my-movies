import React from "react";
import styled from "styled-components";
import Logo from '../img/logo.svg';

const Footer = styled.div`
  background: rgba(38,50,56,1);
  padding: 20px;
`

export default () => {
  return (
    <Footer>
      <img src={Logo} alt="logo moviedb" width="100" height="30"/>
    </Footer>
  )
}