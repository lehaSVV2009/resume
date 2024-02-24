import React from "react";
import Anime from "react-anime";

import "./ScrollDownButton.scss";

const ScrollDownButton = ({ delay }) => (
  <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => delay}>
    <div className="scroll-down">Scroll</div>
  </Anime>
);

export default ScrollDownButton;
