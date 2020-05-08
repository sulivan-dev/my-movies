import React from "react";
import { connect } from 'react-redux';

import { getPremieres, getUpcoming } from "../redux/actions/movieActions";

import Feature from "../components/Feature";
import Premiere from "../components/Premiere";
import SearchResults from "../components/SearchResults";
import SectionTitle from "../components/SectionTitle";
import Header from "../components/Header";

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getPremieres();
    this.props.getUpcoming();
  }

  renderResults = () => {
    const { data } = this.props.search;

    if (data.length === 0) {
      return (
        <div>
          <Feature movie={ this.props.premieres.featureMovie }/>
          <SectionTitle>Estrenos:</SectionTitle>
          <Premiere movies={ this.props.premieres.data }/>
          <SectionTitle>Próximamente:</SectionTitle>
          <Premiere movies={ this.props.upcoming.data }/>
        </div>
      )
    } else {
      return (
        <SearchResults data={ data }/>
      )
    }
  }

  render() {
    return (
      <div>
        <Header path={this.props.match.path}/>
        {
          this.renderResults()
        }
      </div>
    );
  }
}

function mapStateToProps({ premieres, upcoming, search }) {
  return {
    premieres,
    upcoming,
    search,
  }
}

export default connect(mapStateToProps, {
  getPremieres,
  getUpcoming,
}) (HomePage);
