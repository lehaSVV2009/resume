import React, {Component} from 'react'

import './Fragment.css'

export default class Fragment extends Component {
  constructor(props) {
    super(props)
    if (props.header) {
      this.wrapperClass = 'header-component'
    } else if (props.footer) {
      this.wrapperClass = 'footer-component'      
    } else {
      this.wrapperClass = 'centered'
    }
  }

  render() {
    return (
      <div style={{ background: this.props.color || 'white' }} className='fragment' >
        <div className={`fragment-container ${this.wrapperClass}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}