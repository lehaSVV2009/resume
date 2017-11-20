import React, {Component} from 'react'
import { RingLoader } from 'halogen'
import { toast, ToastContainer } from 'react-toastify'

import ContactForm from '../components/ContactForm'
import './ContactPage.css'

export default class ContactPage extends Component {
  state = {
    loading: false,
  }

  handleSubmit = ({ email, message }) => {
    this.setState({ loading: true })
    fetch(`https://formspree.io/${email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({message})
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }
      throw new Error(`${response.status}`)
    })
    .then(response => response.json)
    .then(data => { 
      this.setState({ loading: false })      
      this.showSuccessNotification()
    })
    .catch(error => {
      this.setState({ loading: false })      
      this.showErrorNotification()
    })  
  }

  showSuccessNotification = (message) => {
    toast(`Thank you! I'll answer you soon!`, {
      className: 'success-notification'
    })
  }

  showErrorNotification = (error) => {
    toast.error('Sending failed.. Please, try again')
  }

  render() {
    if (this.state.loading) {
      return (<RingLoader className='loading' color='#26A65B'/>)
    }
    return (
      <div className="contact">
        <p className="headline">Contact</p>
        <ContactForm
          email={this.props.email}
          onSubmit={this.handleSubmit}
        />
        <ToastContainer/>
      </div>
    );
  }
}