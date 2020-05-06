import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ HomePage }/>
          <Route exact path="/detail" component={ MovieDetail } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
