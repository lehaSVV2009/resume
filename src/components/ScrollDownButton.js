import React, {Component} from 'react'
import ArrowIcon from 'material-ui/svg-icons/navigation/arrow-downward'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ScrollTo from 'scroll-to'
import { red500 } from 'material-ui/styles/colors'

import './ScrollDownButton.css'

export default class ScrollDownButton extends Component {

  /**
   * Sligthly scroll down.
   */
  handleButtonClick = () => {
    ScrollTo(0, this.props.scrollTo, {
      duration: 1500
    })
  }

  render() {
    return (
      <div className='scroll-down-btn'>
        <FloatingActionButton 
          backgroundColor={red500} 
          onClick={this.handleButtonClick}
        >
          <ArrowIcon />
        </FloatingActionButton>
      </div>
    )
  }
}