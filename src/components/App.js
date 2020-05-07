import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/detail/:movieId" component={ MovieDetail } />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
