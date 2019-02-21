import React, { Component } from "react";

import "./Links.css";

export default class Links extends Component {
  render() {
    if (!Array.isArray(this.props.links)) {
      return <div />;
    }

    return (
      <div className="link-list">
        {this.props.links.map((link, index) => (
          <span key={index}>
            <a target="_blank" href={link.url}>
              {link.network}
            </a>
            {index !== this.props.links.length - 1 && "/ "}
          </span>
        ))}
      </div>
    );
  }
}
