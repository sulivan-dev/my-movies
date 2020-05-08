import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { updateDate } from "../redux/actions/testActions";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";

class App extends Component {

  componentDidMount() {
    setInterval(this.props.updateDate, 1000);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header date={ this.props.test.date }/>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/detail/:movieId" component={ MovieDetail } />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ test }) {
  return {
    test,
  }
}

export default connect(mapStateToProps, {
  updateDate,
}) (App);
