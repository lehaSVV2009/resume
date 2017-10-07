import React, {Component} from 'react'
import Anime from 'react-anime';

import Logo from './Logo'
import './SimpleInfo.css'

/**
 * Simple info about resume owner.
 */
export default class SimpleInfo extends Component {

  render() {
    return (
      <div className='simple-info'>
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => 1500}>
          <h3>{this.props.fullName}</h3>
        </Anime>
        <Logo/>
        <Anime opacity={[0, 1]} translateY={'-1em'} delay={(e, i) => 2000}>
          <h6>{this.props.description}</h6>
        </Anime>
      </div>
    )
  }
}