import React from "react";

import Interests from "../components/Interests";

const InterestsPage = ({ interests }) => (
  <div>
    <p className="headline" style={{ color: "white" }}>
      Interests
    </p>
    <Interests interests={interests} />
  </div>
);

export default InterestsPage;
