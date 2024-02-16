import React, { Component } from "react";
import { Element } from "react-scroll";

import "./Fragment.scss";

export default class Fragment extends Component {
  constructor(props) {
    super(props);
    if (props.home) {
      this.wrapperClass = "home-component";
    } else if (props.footer) {
      this.wrapperClass = "footer-component";
    } else {
      this.wrapperClass = "centered";
    }
  }

  render() {
    return (
      <Element
        name={this.props.tag || ""}
        style={{ background: this.props.color || "white" }}
        className="fragment"
      >
        <div className={`fragment-container ${this.wrapperClass}`}>
          {this.props.children}
        </div>
      </Element>
    );
  }
}
