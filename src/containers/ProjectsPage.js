import React from "react";

import ProjectItem from "../components/ProjectItem";

const ProjectsPage = ({ work }) => (
  <div>
    <p className="headline">Projects</p>
    {Array.isArray(work) &&
      work.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
  </div>
);

export default ProjectsPage;
