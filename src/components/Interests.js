import React, { Component } from "react";

import Gallery from "./Gallery";
import camping from "../images/camping.gif";
import programming from "../images/programming.jpg";
import sleeping from "../images/sleeping.jpg";
import snowboarding from "../images/snowboarding.gif";
import unknown from "../images/unknown.jpg";

export default class Interests extends Component {
  constructor(props) {
    super(props);
    if (Array.isArray(this.props.interests)) {
      this.state = {
        tiles: this.props.interests.map(interest => ({
          title: interest.name,
          image: interest.image || this.extractImage(interest.name)
        }))
      };
    }
  }

  extractImage = name => {
    return name === "Sleeping"
      ? sleeping
      : name === "Programming"
      ? programming
      : name === "Sport"
      ? snowboarding
      : name === "Camping"
      ? camping
      : unknown;
  };

  render() {
    return <Gallery tiles={this.state.tiles} />;
  }
}
