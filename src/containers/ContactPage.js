import React, { Component } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";

import ContactForm from "../components/ContactForm";
import "./ContactPage.scss";

export default class ContactPage extends Component {
  state = {
    loading: false,
    openSuccessSnackbar: false,
    openErrorSnackbar: false
  };

  handleCloseSnackBar = () => {
    this.setState({ openSuccessSnackbar: false, openErrorSnackbar: false });
  };

  handleSubmit = ({ to, from, message }) => {
    this.setState({ loading: true });
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        { to, from, message },
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        throw new Error(`${response.status}`);
      })
      .then(response => response.json)
      .then(data => {
        this.setState({
          loading: false,
          openSuccessSnackbar: true
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          openErrorSnackbar: true
        });
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      );
    }
    return (
      <div className="contact">
        <p className="headline">Contact</p>
        <ContactForm to={this.props.email} onSubmit={this.handleSubmit} />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.openSuccessSnackbar || this.state.openErrorSnackbar}
          autoHideDuration={5000}
          onClose={this.handleCloseSnackBar}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.handleCloseSnackBar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          <Alert
            onClose={this.handleCloseSnackBar}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {this.state.openSuccessSnackbar
              ? "Thank you! I'll answer you soon!"
              : "Sending failed.. Please, try again"}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}
