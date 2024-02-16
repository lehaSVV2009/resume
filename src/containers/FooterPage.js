import React from "react";

import Links from "../components/Links";
import "./FooterPage.scss";

export default ({ links }) => (
  <div className="footer">
    <Links links={links} />
  </div>
);
