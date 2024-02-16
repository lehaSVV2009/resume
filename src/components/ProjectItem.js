import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import Chip from "material-ui/Chip";

import ReplacedDividerText from "../components/ReplacedDividerText";
import "./ProjectItem.scss";

const formatDate = (date, defaultIfNull) =>
  date && Date.parse(date)
    ? new Date(date).toLocaleDateString("en-gb", {
        month: "short",
        year: "numeric"
      })
    : defaultIfNull || "";

const toSubtitle = (startDate, endDate, company) =>
  `${formatDate(startDate)} - ${formatDate(endDate, "now")} ${
    company && company !== "-" ? `(${company})` : ""
  }`;

export default ({ project }) => {
  if (!project) {
    return <span />;
  }

  return (
    <div className="project">
      <Card>
        <CardHeader
          title={
            (project.position ? project.position + ". " : "") +
            (project.name || "")
          }
          subtitle={toSubtitle(
            project.startDate,
            project.endDate,
            project.company
          )}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <ReplacedDividerText
            text={project.summary}
            divider="."
            replacement={
              <span>
                .<br />
              </span>
            }
          />
          <br />
          <br />
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              See project
              <br />
              <br />
            </a>
          )}
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
};
