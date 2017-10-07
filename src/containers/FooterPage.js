import React, {Component} from 'react'

import Links from '../components/Links'
import ScrollUpButton from '../components/ScrollUpButton'
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