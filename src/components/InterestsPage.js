import React, {Component} from 'react'

import Interests from './Interests'

export default class InterestsPage extends Component {
  render() {
    return (
      <div>
        <p className='headline'>Interests</p>
        <Interests interests={this.props.interests}/>
      </div>
    )
  }
}