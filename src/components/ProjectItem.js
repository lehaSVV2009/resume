import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";

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

const ProjectItem = ({ project }) => {
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
          subheader={toSubtitle(
            project.startDate,
            project.endDate,
            project.company
          )}
        />
        <CardContent>
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
                  <Chip label={highlight}></Chip>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectItem;
