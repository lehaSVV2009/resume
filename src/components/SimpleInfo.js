import React from "react";
import Anime from "react-anime";

import Logo from "./Logo";
import "./SimpleInfo.css";

/**
 * Simple info about resume owner.
 */
export default ({ fullName, fullNameDelay, description, descriptionDelay }) => (
  <div className="simple-info">
    <Anime opacity={[0, 1]} translateY={"2em"} delay={() => fullNameDelay}>
      <h3>{fullName}</h3>
    </Anime>
    <br />
    <br />
    <Logo />
    <br />
    <br />
    <Anime
      opacity={[0, 1]}
      translateY={"-2em"}
      delay={(e, i) => descriptionDelay}
    >
      <h6>{description}</h6>
    </Anime>
  </div>
);
