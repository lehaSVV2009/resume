import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const fieldStyle = {
  width: "100%"
};

const ContactForm = ({ to, onSubmit }) => {
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onSubmit({ to, from, message });
  };

  const handleFromInputChange = event => {
    setFrom(event.target.value);
  };

  const handleMessageInputChange = event => {
    setMessage(event.target.value);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <TextValidator
        style={fieldStyle}
        floatingLabelText="To"
        disabled={true}
        name="to"
        value={to}
      />
      <br />
      <TextValidator
        style={fieldStyle}
        label="From"
        onChange={handleFromInputChange}
        name="from"
        type="email"
        value={from}
        validators={["required"]}
        errorMessages={["Enter your email"]}
      />
      <br />
      <TextValidator
        style={fieldStyle}
        label="Say Hello"
        onChange={handleMessageInputChange}
        name="message"
        value={message}
        multiline
        rows={4}
        validators={["required"]}
        errorMessages={["Enter your message"]}
      />
      <br />
      <Button variant="contained" type="submit">
        Send
      </Button>
    </ValidatorForm>
  );
};

export default ContactForm;
