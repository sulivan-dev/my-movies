import React  from "react";
import { connect } from 'react-redux';

import { getCredits, getDetails } from "../redux/actions/movieActions";

import Feature from "../components/Feature";
import Cast from "../components/Cast";

class MovieDetail extends React.Component {

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.props.getDetails(movieId);
    this.props.getCredits(movieId);
  }

  render() {
    return (
      <div>
        <Feature movie={ this.props.details.data }/>
        <Cast cast={ this.props.credits.data } />
      </div>
    );
  }
}

function mapStateToProps({ credits, details }) {
  return {
    credits,
    details,
  }
}

export default connect(mapStateToProps, {
  getCredits,
  getDetails,
}) (MovieDetail);
