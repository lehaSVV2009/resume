import React from "react";

import Interests from "../components/Interests";

export default ({ interests }) => (
  <div>
    <p className="headline" style={{ color: "white" }}>
      Interests
    </p>
    <Interests interests={interests} />
  </div>
);
