import React, { Component } from "react";

import Gallery from "./Gallery";
import camping from "../images/camping.gif";
import programming from "../images/programming.jpg";
import sleeping from "../images/sleeping.jpg";
import snowboarding from "../images/snowboarding.gif";

export default class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: Array.isArray(this.props.interests)
        ? this.props.interests.map(interest => ({
            title: interest.name,
            image: interest.image || this.extractImage(interest.name)
          }))
        : []
    };
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
      : `https://loremflickr.com/320/240/${name}`;
  };

  render() {
    return <Gallery tiles={this.state.tiles} />;
  }
}
