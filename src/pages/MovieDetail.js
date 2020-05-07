import React  from "react";
import axios from 'axios';

import Feature from "../components/Feature";
import Cast from "../components/Cast";

class MovieDetail extends React.Component {

  state = {
    movie: '',
    cast: [],
  }

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.getMovieDetail(movieId);
    this.getMovieCredits(movieId);
  }

  getMovieDetail = async (movieId) => {
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a31ebe679ead5ce44960b901d92b8cf1&language=es`)

      this.setState({
        movie: result.data
      })
    } catch (e) {
      console.log(e);
    }
  }

  getMovieCredits = async (movieId) => {
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a31ebe679ead5ce44960b901d92b8cf1&language=es`)

      this.setState({
        cast: result.data.cast
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Feature movie={ this.state.movie }/>
        <Cast cast={ this.state.cast } />
      </div>
    );
  }
}

export default MovieDetail;
