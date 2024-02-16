import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import { RingLoader } from "halogen";
import { toast, ToastContainer } from "react-toastify";

import ContactForm from "../components/ContactForm";
import "./ContactPage.scss";

export default class ContactPage extends Component {
  state = {
    loading: false
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
        this.setState({ loading: false });
        this.showSuccessNotification();
      })
      .catch(error => {
        this.setState({ loading: false });
        this.showErrorNotification();
      });
  };

  showSuccessNotification = message => {
    toast.success(`Thank you! I'll answer you soon!`);
  };

  showErrorNotification = error => {
    toast.error("Sending failed.. Please, try again");
  };

  render() {
    if (this.state.loading) {
      return <RingLoader className="loading" color="#26A65B" />;
    }
    return (
      <div className="contact">
        <p className="headline">Contact</p>
        <ContactForm to={this.props.email} onSubmit={this.handleSubmit} />
        <ToastContainer />
      </div>
    );
  }
}
