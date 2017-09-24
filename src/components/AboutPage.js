import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'

import avatar from '../images/avatar.png'
import './AboutPage.css'

export default class AboutPage extends Component {

  render() {
    return (
      <div className='about'>
        <Avatar src={avatar} size={150}/>
        <p className='about-text'>
          {this.props.about}
        </p>
      </div>
    )
  }
}