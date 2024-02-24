import React from "react";

import Links from "../components/Links";
import "./FooterPage.scss";

const FooterPage = ({ links }) => (
  <div className="footer">
    <Links links={links} />
  </div>
);

export default FooterPage;
