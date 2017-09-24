import React, {Component} from 'react'

import './Fragment.css'

export default class Fragment extends Component {
  constructor(props) {
    super(props)
    if (props.header) {
      this.additionalClass = 'header-component'
    } else if (props.footer) {
      this.additionalClass = 'footer-component'      
    } else {
      this.additionalClass = ''
    }
  }

  render() {
    return (
      <div style={{ background: this.props.color || 'white' }} className='fragment' >
        <div className={`fragment-container ${this.additionalClass}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}