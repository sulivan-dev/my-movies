import React  from "react";
import { connect } from 'react-redux';

import { getCredits, getDetails } from "../redux/actions/movieActions";

import Feature from "../components/Feature";
import Cast from "../components/Cast";
import Header from "../components/Header";

class MovieDetail extends React.Component {

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.props.getDetails(movieId);
    this.props.getCredits(movieId);
  }

  render() {
    return (
      <div>
        <Header date={ this.props.test.date }/>
        <Feature movie={ this.props.details.data }/>
        <Cast cast={ this.props.credits.data } />
      </div>
    );
  }
}

function mapStateToProps({ test, credits, details }) {
  return {
    test,
    credits,
    details,
  }
}

export default connect(mapStateToProps, {
  getCredits,
  getDetails,
}) (MovieDetail);
