import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getSearch } from "../redux/actions/movieActions";

import Search from "./Search";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  background: rgba(0,0,0,0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > h3 {
    margin-left: 20px;
  }
`

const Date = styled.div`
  
`

class Header extends React.Component  {

  onChangeSearch = (event) => {
    console.log(event.target.value);
    this.props.getSearch(event.target.value);
  }

  render() {
    return (
      <Container>
        <h3>That's my movie</h3>
        {
          this.props.path === "/" && <Search onChangeSearch={this.onChangeSearch}/>
        }
        <Date>{ this.props.test.date.toLocaleString() }</Date>
      </Container>
    )
  }
}

function mapStateToProps({ test }) {
  return {
    test
  }
}

export default connect(mapStateToProps, {
  getSearch,
}) (Header);
