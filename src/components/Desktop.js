import React from "react";
import Responsive from "react-responsive";

/**
 * Marks that all the components inside are shown only if screen has more than desktop size.
 */
export default class Desktop extends React.Component {
  render() {
    return <Responsive minWidth={992}>{this.props.children}</Responsive>;
  }
}
