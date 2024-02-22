import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import MenuItem from "material-ui/MenuItem";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

const BreadCrumbItem = ({ anchor, name }) => {
  if (!anchor || !name) {
    return <span />;
  }

  return (
    <Link to={anchor} duration={1000} smooth>
      <Mobile>
        <MenuItem primaryText={name} />
      </Mobile>
      <Desktop>
        <Button color="inherit">{name}</Button>
      </Desktop>
    </Link>
  );
};

export default BreadCrumbItem;
