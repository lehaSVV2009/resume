import React, {Component} from 'react'

import Links from './Links'
import ScrollUpButton from './ScrollUpButton'
import './FooterPage.css'

export default class FooterPage extends Component {
  render() {
    return (
      <div className='footer'>
        <Links links={this.props.links}/>
        <ScrollUpButton/>
      </div>
    )
  }
}