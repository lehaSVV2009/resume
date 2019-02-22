import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import Chip from "material-ui/Chip";

import "./ProjectItem.css";

export default class ProjectItem extends Component {
  render() {
    const { project } = this.props;

    if (!project) {
      return <span />;
    }

    return (
      <div className="project">
        <Card>
          <CardHeader
            title={(project.name ? project.name + ". " : "") + project.position}
            subtitle={project.company}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {project.description}
            <br />
            <br />
            <div className="projects">
              {Array.isArray(project.highlights) &&
                project.highlights.map((highlight, index) => (
                  <div key={index} className="project-highlight">
                    <Chip>{highlight}</Chip>
                  </div>
                ))}
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
