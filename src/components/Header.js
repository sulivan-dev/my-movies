import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getSearch, clearSearch } from "../redux/actions/movieActions";

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

  state = {
    textSearch: '',
  }

  onChangeSearch = (event) => {
    const { value } = event.target;
    this.props.getSearch(value);

    this.setState({
      textSearch: value,
    });
  }

  onClearTextSearch = () => {
    this.setState({
      textSearch: ''
    });

    this.props.clearSearch();
  }

  render() {
    return (
      <Container>
        <h3>That's my movie</h3>
        {
          this.props.path === "/" && <Search onChangeSearch={this.onChangeSearch}
                                             clear={this.onClearTextSearch}
                                             textSearch={this.state.textSearch}/>
        }
        <Date>{ this.props.test.date.toLocaleString() }</Date>
      </Container>
    )
  }
}

function mapStateToProps({ test }) {
  return {
    test,
  }
}

export default connect(mapStateToProps, {
  getSearch,
  clearSearch,
}) (Header);
