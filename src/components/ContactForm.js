import React, { Component } from "react";
import Button from "@mui/material/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const fieldStyle = {
  width: "100%"
};

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      message: ""
    };
  }

  handleSubmit = () => {
    this.props.onSubmit({
      to: this.props.to,
      from: this.state.from,
      message: this.state.message
    });
  };

  handleFromInputChange = event => {
    this.setState({ from: event.target.value });
  };

  handleMessageInputChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    const { to } = this.props;
    const { from, message } = this.state;
    return (
      <ValidatorForm onSubmit={this.handleSubmit}>
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
          onChange={this.handleFromInputChange}
          name="from"
          type="email"
          value={from}
        />
        <br />
        <TextValidator
          style={fieldStyle}
          label="Say Hello"
          onChange={this.handleMessageInputChange}
          name="message"
          value={message}
          multiLine
          validators={["required"]}
          errorMessages={["Enter your message"]}
        />
        <br />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </ValidatorForm>
    );
  }
}
