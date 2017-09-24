import React, {Component} from 'react'

import Console from './Console'
import ConsoleSkills from './ConsoleSkills'
import './SkillsPage.css'

export default class SkillsPage extends Component {
  render() {
    return (
      <div>
        <p className='headline'>Skills</p>
        <Console>
          <ConsoleSkills skills={this.props.skills}/>
        </Console>
      </div>
    );
  }
}
