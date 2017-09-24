import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import ScrollTo from 'scroll-to'
import { red500 } from 'material-ui/styles/colors'

export default class ScrollUpButton extends Component {

  /**
   * Sligthly scroll up.
   */
  handleButtonClick = () => {
    ScrollTo(0, 0, {
      duration: 1500
    })
  }

  render() {
    return (
      <FlatButton 
        labelStyle={{ 'color': red500 }} 
        label='Back to top' 
        onClick={this.handleButtonClick}
      />
    )
  }
}