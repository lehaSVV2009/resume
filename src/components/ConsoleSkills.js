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
        <li>&lt;<span className='html-1'>html</span>&gt;</li>
        <li>
          <ul className='no-top-padding'>
            <li>
              &lt;<span className='html-1'>head</span>&gt; &lt;/<span className='html-1'>head</span>&gt;
            </li>
            <li>
              &lt;<span className='html-1'>body</span>&gt;
            </li>
            <li>
              <ul className='no-top-padding'>
                <li>&lt;<span className='html-1'>ul</span>&gt;</li>
                <ul className='no-top-padding'>
                  {
                    Array.isArray(this.props.skills) && 
                    this.props.skills.map((skill, index) => (
                      <ConsoleItem key={index} skill={skill}/>
                    ))
                  }
                </ul>
                <li>&lt;/<span className='html-1'>ul</span>&gt;</li>
              </ul>
            </li>
            <li>&lt;/<span className='html-1'>body</span>&gt;</li>
          </ul>
        </li>
        <li>&lt;/<span className='html-1'>html</span>&gt;</li>
      </ul>
    );
  }
}
