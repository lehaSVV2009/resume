import React from "react";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-scroll";
import MenuItem from "material-ui/MenuItem";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default ({ anchor, name }) => {
  if (!anchor || !name) {
    return <span />;
  }

  return (
    <Link to={anchor} duration={1000} smooth>
      <Mobile>
        <MenuItem primaryText={name} />
      </Mobile>
      <Desktop>
        <FlatButton label={name} labelStyle={{ color: "white" }} />
      </Desktop>
    </Link>
  );
};
