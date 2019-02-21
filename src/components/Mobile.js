import React from "react";
import Responsive from "react-responsive";

/**
 * Marks that all the components inside are shown only if screen has less than desktop size.
 */
export default class Mobile extends React.Component {
  render() {
    return <Responsive maxWidth={991}>{this.props.children}</Responsive>;
  }
}
