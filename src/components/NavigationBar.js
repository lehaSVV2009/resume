import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "@mui/material/IconButton";

import IconHtml from "./IconHtml";
import IconDoc from "./IconDoc";
import IconPdf from "./IconPdf";

import BreadCrumb from "./BreadCrumb";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const appBarStyle = {
  backgroundColor: "#473a56",
  position: "fixed",
  zIndex: 1
};

const HtmlButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <IconHtml htmlColor="white" />
  </IconButton>
);

const PdfButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <IconPdf htmlColor="white" />
  </IconButton>
);

const WordButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <IconDoc htmlColor="white" />
  </IconButton>
);

export default class NavigationBar extends Component {
  handleHtmlClick = () => this.props.onHtmlClick();
  handlePdfClick = () => this.props.onPdfClick();
  handleWordClick = () => this.props.onWordClick();

  renderDownloadLinks = () => (
    <div>
      <HtmlButton onClick={this.handleHtmlClick} />
      <PdfButton onClick={this.handlePdfClick} />
      <WordButton onClick={this.handleWordClick} />
    </div>
  );

  render() {
    return (
      <div>
        <Mobile>
          <AppBar
            style={appBarStyle}
            iconElementLeft={this.renderDownloadLinks()}
            iconElementRight={<BreadCrumb items={this.props.breadCrumb} />}
          />
        </Mobile>
        <Desktop>
          <AppBar
            style={appBarStyle}
            iconElementLeft={this.renderDownloadLinks()}
            title={<BreadCrumb items={this.props.breadCrumb} />}
          />
        </Desktop>
      </div>
    );
  }
}
