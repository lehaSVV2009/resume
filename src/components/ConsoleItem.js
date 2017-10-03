import React, {Component} from 'react'

import './ConsoleSkills.css'

export default class ConsoleItem extends Component {
  render() {
    const { skill } = this.props
    
    if (!skill && !Array.isArray(skill.keywords)) {
      return (<span/>)
    }

    return (
      <span>
        {skill.keywords.map((keyword, index) => (
          <li key={index}>
            <span className='code-string'>{keyword}</span>,
          </li>
        ))}
      </span>
    );
  }
}
