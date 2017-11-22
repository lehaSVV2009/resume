import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

import './Console.css'

export default class Console extends Component {
  constructor(props) {
    super(props)
    this.consoleStyle = {
      width: '100%',
      display: 'inline-block',
      background: '#263238'
    }
  }

  render() {
    return (
      <Paper zDepth={3} style={this.consoleStyle}>
        <div className='console-header'>
          <div className='console-buttons'>
            <div className='console-button btn-1'></div>
            <div className='console-button btn-2'></div>
            <div className='console-button btn-3'></div>
          </div>
        </div>
        <div className='console-content'>
          {this.props.children}
        </div>
      </Paper>
    );
  }
}
