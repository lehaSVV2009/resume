import React, { Component } from "react";

import NavigationBar from "../components/NavigationBar";

export default class HeaderPage extends Component {
  handleOpenPdf = () =>
    window.open(`${process.env.PUBLIC_URL}/cv.html`, "_blank");

  render() {
    return (
      <NavigationBar
        onPdfClick={this.handleOpenPdf}
        breadCrumb={this.props.breadCrumb}
      />
    );
  }
}
