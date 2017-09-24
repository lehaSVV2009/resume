import React, {Component} from 'react';

import ContactForm from './ContactForm'

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contact">
        <p className="headline">Contact</p>
        <ContactForm email={this.props.email}/>
      </div>
    );
  }
}