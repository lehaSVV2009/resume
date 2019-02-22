import React, { Component } from "react";
import Avatar from "material-ui/Avatar";

import "./AboutPage.css";

export default class AboutPage extends Component {
  render() {
    const { picture, about } = this.props;
    return (
      <div className="about">
        <Avatar
          src={picture || "https://www.gravatar.com/avatar?d=mp&s=1000"}
          size={200}
        />
        <p className="about-text">{about}</p>
      </div>
    );
  }
}
