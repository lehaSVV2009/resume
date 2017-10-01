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
            &lt;<span className='html-1'>li</span>&gt;
            <span className='html-2'>{keyword}</span>
            &lt;/<span className='html-1'>li</span>&gt;
          </li>
        ))}
      </span>
    );
  }
}
