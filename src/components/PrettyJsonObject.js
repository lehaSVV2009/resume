import React, {Component} from 'react'

import './PrettyJson.css'

export default class PrettyJsonObject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: this.props.object ? Object.entries(this.props.object) : []
    }
  }

  render() {
    const { object } = this.props
    
    if (!object) {
      return (<span/>)
    }

    return (
      <span>
        {this.state.entries.map((entry, index) => (
          <span key={index}>
            <li>&#123; </li>
            <li className='row'>
              "<span className='json-code-key'>{entry[0]}</span>"
              :
              "<span className='json-code-value'>{entry[1]}</span>"
            </li>
            <li>&#125;,</li>
          </span>
        ))}
      </span>
    );
  }
}