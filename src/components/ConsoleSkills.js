import React, {Component} from 'react'

import ConsoleItem from './ConsoleItem'

import './ConsoleSkills.css'

// TODO move to JSON format with 2 items - time/level and name
export default class ConsoleSkills extends Component {
  render() {
    if (!Array.isArray(this.props.skills)) {
      return (<span/>)
    }

    return (
      <ul>
        <li>[</li>
        <li>
          <ul className='no-top-padding'>
            {
              Array.isArray(this.props.skills) && 
              this.props.skills.map((skill, index) => (
                <ConsoleItem key={index} skill={skill}/>
              ))
            }
          </ul>
        </li>
        <li>]</li>
      </ul>
    );
  }
}
