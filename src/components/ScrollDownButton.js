import React from "react";
import Anime from "react-anime";

import "./ScrollDownButton.scss";

export default ({ delay }) => (
  <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => delay}>
    <div className="scroll-down">Scroll</div>
  </Anime>
);
