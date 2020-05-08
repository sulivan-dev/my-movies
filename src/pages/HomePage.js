import React from "react";
import { connect } from 'react-redux';

import { getPremieres, getUpcoming } from "../redux/actions/movieActions";

import Feature from "../components/Feature";
import Premiere from "../components/Premiere";
import SectionTitle from "../components/SectionTitle";
import Header from "../components/Header";

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getPremieres();
    this.props.getUpcoming();
  }

  render() {
    return (
      <div>
        <Header path={this.props.match.path}/>
        <Feature movie={ this.props.premieres.featureMovie }/>
        <SectionTitle>Estrenos:</SectionTitle>
        <Premiere movies={ this.props.premieres.data }/>
        <SectionTitle>Próximamente:</SectionTitle>
        <Premiere movies={ this.props.upcoming.data }/>
      </div>
    );
  }
}

function mapStateToProps({ premieres, upcoming }) {
  return {
    premieres,
    upcoming,
  }
}

export default connect(mapStateToProps, {
  getPremieres,
  getUpcoming,
}) (HomePage);
