import React, {Component} from 'react'

import Console from './Console'
import PrettyJson from './PrettyJson'
import './SkillsPage.css'

export default class SkillsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skillsJson: this.createSkillsJson(this.props.skills)
    }
  }

  createSkillsJson = (skills) => {
    if (!Array.isArray(skills)) {
      return []
    }
    return skills.map(skill => {
      const json = {}
      json[skill.name] = skill.level
      return json
    })
  }

  render() {
    if (!Array.isArray(this.props.skills)) {
      return (<span/>)
    }

    return (
      <div>
        <p className='headline'>Skills</p>
        <Console>
          <PrettyJson array={this.state.skillsJson}/>
        </Console>
      </div>
    );
  }
}
