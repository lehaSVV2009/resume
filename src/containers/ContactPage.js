import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";

import ContactForm from "../components/ContactForm";
import "./ContactPage.scss";

const ContactPage = ({ email }) => {
  const [loading, setLoading] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSuccessBar] = useState(false);

  const handleCloseSnackBar = () => {
    setOpenErrorSuccessBar(false);
    setOpenSuccessSnackbar(false);
  };

  const handleSubmit = ({ to, from, message }) => {
    setLoading(true);
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
        setLoading(false);
        setOpenSuccessSnackbar(true);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setOpenErrorSuccessBar(true);
      });
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="contact">
      <p className="headline">Contact</p>
      <ContactForm to={email} onSubmit={handleSubmit} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSuccessSnackbar || openErrorSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackBar}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackBar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={openSuccessSnackbar ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {openSuccessSnackbar
            ? "Thank you! I'll answer you soon!"
            : "Sending failed.. Please, try again"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactPage;
