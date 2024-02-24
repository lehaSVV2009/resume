import React, { useEffect, useState } from "react";

import SimpleInfo from "../components/SimpleInfo";
import ScrollDownButton from "../components/ScrollDownButton";
import "./HomePage.scss";

/**
 * First page component. Shown on full browser window until it is not scrolled down.
 */
const HomePage = ({ height, fullName, description }) => {
  const [windowHeight, setWindowHeight] = useState(height);
  /**
   * Make home page shown on full browser window even if it is resized.
   */
  const handleWindowResize = () => {
    setWindowHeight(window.innerHeight + "px");
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="home" style={{ height: windowHeight }}>
      <SimpleInfo
        fullName={fullName}
        fullNameDelay={3000}
        description={description}
        descriptionDelay={3500}
      />
      <ScrollDownButton delay={4000} />
    </div>
  );
};

export default HomePage;
