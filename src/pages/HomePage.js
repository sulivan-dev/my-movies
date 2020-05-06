import React from "react";
import axios from 'axios';

import Feature from "../components/Feature";
import Premiere from "../components/Premiere";

class HomePage extends React.Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const results = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a31ebe679ead5ce44960b901d92b8cf1&language=es');

      this.setState({
        movies: results.data.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Feature/>
        <Premiere movies={this.state.movies}/>
      </div>
    );
  }
}

export default HomePage;
