import React from "react";

import Gallery from "./Gallery";
import camping from "../images/camping.gif";
import programming from "../images/programming.jpg";
import sleeping from "../images/sleeping.jpg";
import snowboarding from "../images/snowboarding.gif";

const extractImage = name => {
  return name === "Sleeping"
    ? sleeping
    : name === "Programming"
    ? programming
    : name === "Sport"
    ? snowboarding
    : name === "Camping"
    ? camping
    : `https://loremflickr.com/320/240/${name}`;
};

const Interests = ({ interests }) => {
  const tiles = Array.isArray(interests)
    ? interests.map(interest => ({
        title: interest.name,
        image: interest.image || extractImage(interest.name)
      }))
    : [];

  return <Gallery tiles={tiles} />;
};

export default Interests;
