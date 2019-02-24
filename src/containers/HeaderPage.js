import React, { Component } from "react";

import NavigationBar from "../components/NavigationBar";

export default class HeaderPage extends Component {
  handleOpenHtml = () =>
    window.open(`${process.env.PUBLIC_URL}/cv.html`, "_blank");

  handleOpenPdf = () =>
    window.open(`${process.env.PUBLIC_URL}/cv.pdf`, "_blank");

  handleOpenWord = () =>
    window.open(`${process.env.PUBLIC_URL}/cv.docx`, "_blank");

  render() {
    return (
      <NavigationBar
        onHtmlClick={this.handleOpenHtml}
        onPdfClick={this.handleOpenPdf}
        onWordClick={this.handleOpenWord}
        breadCrumb={this.props.breadCrumb}
      />
    );
  }
}
