import React, {Component} from 'react'

import springLogo from '../images/spring-logo.png'
import reactLogo from '../images/react-logo.png'
import './Logo.css'

/**
 * Component with beatiful logo animations inside.
 */
export default class Logo extends Component {
  render() {
    return (
      <div>
        <a href='https://spring.io' target='_blank' rel='noopener noreferrer'>
          <img src={springLogo} className='logo' alt='Spring'/>
        </a>
        <a href='https://facebook.github.io/react' target='_blank' rel='noopener noreferrer'>
          <img src={reactLogo} className='logo' alt='React'/>
        </a>
      </div>
    )
  }
}