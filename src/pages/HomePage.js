import React from "react";

import Feature from "../components/Feature";
import Premiere from "../components/Premiere";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Feature/>
        <Premiere/>
      </div>
    );
  }
}

export default HomePage;