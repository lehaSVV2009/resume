import React, { Component } from "react";

import Console from "../components/Console";
import PrettyJson from "../components/PrettyJson";
import "./SkillsPage.css";

export default class SkillsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsJson: this.createSkillsJson(this.props.skills)
    };
  }

  createSkillsJson = skills => {
    if (!Array.isArray(skills)) {
      return [];
    }
    return skills.map(skill => {
      const json = {};
      json[skill.name] =
        Array.isArray(skill.keywords) && skill.keywords.length > 0
          ? skill.keywords[0]
          : "";
      return json;
    });
  };

  render() {
    if (!Array.isArray(this.props.skills)) {
      return <span />;
    }

    return (
      <div>
        <p className="headline">Skills</p>
        <Console>
          <PrettyJson array={this.state.skillsJson} />
        </Console>
      </div>
    );
  }
}
