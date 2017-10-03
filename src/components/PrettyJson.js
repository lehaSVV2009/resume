import React, {Component} from 'react'

import PrettyJsonObject from './PrettyJsonObject'

import './PrettyJson.css'

// TODO extract PrettyJsonArray
// or use react-json-view or smth like that
export default class PrettyJson extends Component {
  render() {
    return (
      <ul>
        <li>[</li>
        <li>
          <ul className='row'>
            {
              Array.isArray(this.props.array) && 
              this.props.array.map((item, index) => (
                <PrettyJsonObject key={index} object={item}/>
              ))
            }
          </ul>
        </li>
        <li>]</li>
      </ul>
    );
  }
}
