import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import { updateDate } from "../redux/actions/testActions";

import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";

class App extends Component {

  componentDidMount() {
    setInterval(this.props.updateDate, 1000);
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/detail/:movieId" component={ MovieDetail } />
          <Footer/>
        </Switch>
      </Router>
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
