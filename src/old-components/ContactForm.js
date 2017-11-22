import React, {Component} from 'react';
import Button from 'material-ui-next/Button'
import {TextValidator} from 'react-material-ui-form-validator'
import {ValidatorForm} from 'react-form-validator-core'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  handleSubmit = () => {
    this.props.onSubmit({
      email: this.props.email,
      message: this.state.message,
    })
  }

  handleMessageInputChange = (event) => {
    this.setState({ message: event.target.value })
  }

  render() {
    const { email } = this.props
    const { message } = this.state
    return (
      <ValidatorForm onSubmit={this.handleSubmit}>
        <TextValidator
          style={{ width: '100%' }}
          floatingLabelText='My email'
          disabled={true}
          name='email'
          value={email}
        />
        <br/>
        <TextValidator
          style={{ width: '100%' }}
          floatingLabelText='Say Hello'
          onChange={this.handleMessageInputChange}
          name='message'
          value={message}
          multiLine
          validators={['required']}
          errorMessages={['Enter your message']}
        />
        <br/>
        <Button raised color='accent' type='submit'>Send</Button>
      </ValidatorForm>
    )
  }
}