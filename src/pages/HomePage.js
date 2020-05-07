import React from "react";
import axios from 'axios';

import Feature from "../components/Feature";
import Premiere from "../components/Premiere";
import SectionTitle from "../components/SectionTitle";

class HomePage extends React.Component {

  state = {
    movies: [],
    featureMovie: '',
    upcomingMovies: [],
  }

  componentDidMount() {
    this.getData();
    this.getUpcomingMovies();
  }

  getData = async () => {
    try {
      const results = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a31ebe679ead5ce44960b901d92b8cf1&language=es');
      this.setFeatureMovie(results.data.results);

      this.setState({
        movies: results.data.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  getUpcomingMovies = async () => {
    try {
      const results = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=a31ebe679ead5ce44960b901d92b8cf1&language=es');

      this.setState({
        upcomingMovies: results.data.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  setFeatureMovie = (movies) => {
    const featureMovie = movies[Math.floor(Math.random() * movies.length)];

    this.setState({
      featureMovie: featureMovie
    })
  }

  render() {
    return (
      <div>
        <Feature movie={this.state.featureMovie}/>
        <SectionTitle>Estrenos:</SectionTitle>
        <Premiere movies={this.state.movies}/>
        <SectionTitle>Próximamente:</SectionTitle>
        <Premiere movies={this.state.upcomingMovies}/>
      </div>
    );
  }
}

export default HomePage;
