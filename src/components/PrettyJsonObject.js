import React from "react";

import "./PrettyJson.scss";

const PrettyJsonObject = ({ object }) => {
  if (!object) {
    return <span />;
  }

  const entries = Object.entries(object);

  return (
    <span>
      {entries.map((entry, index) => (
        <span key={index}>
          <li>&#123; </li>
          <li className="row">
            "<span className="json-code-key">{entry[0]}</span>" : "
            <span className="json-code-value">{entry[1]}</span>"
          </li>
          <li>&#125;,</li>
        </span>
      ))}
    </span>
  );
};

export default PrettyJsonObject;
