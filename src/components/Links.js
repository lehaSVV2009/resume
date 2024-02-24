import React from "react";

import "./Links.scss";

const Links = ({ links }) => {
  if (!Array.isArray(links)) {
    return <div />;
  }

  return (
    <div className="link-list">
      {links.map((link, index) => (
        <span key={index}>
          <a target="_blank" rel="noopener noreferrer" href={link.url}>
            {link.network}
          </a>
          {index !== links.length - 1 && "/ "}
        </span>
      ))}
    </div>
  );
};

export default Links;
