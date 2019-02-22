import React, { Component } from "react";

import ProjectItem from "../components/ProjectItem";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <p className="headline">Projects</p>
        {Array.isArray(this.props.work) &&
          this.props.work.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
      </div>
    );
  }
}
