import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import ReplacedDividerText from "../components/ReplacedDividerText";
import "./AboutPage.scss";

const AboutPage = ({ name, picture, about }) => (
  <Box className="about">
    <Avatar
      className="about-avatar"
      alt={name}
      src={picture || "https://www.gravatar.com/avatar?d=mp&s=1000"}
      sx={{ width: 200, height: 200 }}
    />
    <p className="about-text">
      <ReplacedDividerText
        text={about}
        divider="."
        replacement={
          <span>
            .<br />
          </span>
        }
      />
    </p>
  </Box>
);

export default AboutPage;
