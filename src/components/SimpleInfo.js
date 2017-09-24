import React, {Component} from 'react'

import Logo from './Logo'
import './SimpleInfo.css'

/**
 * Simple info about resume owner.
 */
export default class SimpleInfo extends Component {

  render() {
    return (
      <div className='simple-info'>
        <h3>{this.props.fullName}</h3>
        <Logo/>
        <h6>{this.props.description}</h6>
      </div>
    )
  }
}