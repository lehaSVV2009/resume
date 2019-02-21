import React, { Component } from "react";

import Interests from "../components/Interests";

export default class InterestsPage extends Component {
  render() {
    return (
      <div>
        <p className="headline" style={{ color: "white" }}>
          Interests
        </p>
        <Interests interests={this.props.interests} />
      </div>
    );
  }
}
