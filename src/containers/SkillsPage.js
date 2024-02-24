import React from "react";

import Console from "../components/Console";
import PrettyJson from "../components/PrettyJson";
import "./SkillsPage.scss";

const createSkillsJson = skills => {
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

const SkillsPage = ({ skills }) => {
  if (!Array.isArray(skills)) {
    return <span />;
  }

  const skillsJson = createSkillsJson(skills);
  return (
    <div>
      <p className="headline">Skills</p>
      <Console>
        <PrettyJson array={skillsJson} />
      </Console>
    </div>
  );
};

export default SkillsPage;
