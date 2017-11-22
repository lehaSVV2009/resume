import React, {Component} from 'react'
import Anime from 'react-anime'

import './ScrollDownButton.css'

export default class ScrollDownButton extends Component {

  render() {
    return (
      <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => this.props.delay}>
        <div className='scroll-down'>
          Scroll
        </div>
      </Anime>
    )
  }
}