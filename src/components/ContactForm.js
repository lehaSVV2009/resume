import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { TextValidator } from "react-material-ui-form-validator";
import { ValidatorForm } from "react-form-validator-core";

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
          floatingLabelText="From"
          onChange={this.handleFromInputChange}
          name="from"
          value={from}
        />
        <br />
        <TextValidator
          style={fieldStyle}
          floatingLabelText="Say Hello"
          onChange={this.handleMessageInputChange}
          name="message"
          value={message}
          multiLine
          validators={["required"]}
          errorMessages={["Enter your message"]}
        />
        <br />
        <RaisedButton type="submit" label="Send" />
      </ValidatorForm>
    );
  }
}
