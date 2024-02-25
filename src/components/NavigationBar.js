import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import IconHtml from "./IconHtml";
import IconDoc from "./IconDoc";
import IconPdf from "./IconPdf";

import BreadCrumb from "./BreadCrumb";

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

export default function ButtonAppBar({
  breadCrumb,
  onHtmlClick,
  onPdfClick,
  onWordClick,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <PdfButton onClick={onPdfClick} />
          <WordButton onClick={onWordClick} />
          <HtmlButton onClick={onHtmlClick} />
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <BreadCrumb items={breadCrumb} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
