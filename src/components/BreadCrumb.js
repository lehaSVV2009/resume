import React from "react";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import IconMoreVert from "material-ui/svg-icons/navigation/more-vert";

import BreadCrumbItem from "./BreadCrumbItem";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const createBreadCrumbItems = items => {
  return (
    Array.isArray(items) &&
    items
      .filter(item => !!item)
      .map(item => (
        <BreadCrumbItem
          key={item.anchor}
          name={item.name}
          anchor={item.anchor}
        />
      ))
  );
};

export default ({ items }) => (
  <div>
    <Mobile>
      <IconMenu
        iconButtonElement={
          <IconButton>
            <IconMoreVert color="white" />
          </IconButton>
        }
        targetOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        {createBreadCrumbItems(items)}
      </IconMenu>
    </Mobile>
    <Desktop>
      <div style={{ float: "right" }}>{createBreadCrumbItems(items)}</div>
    </Desktop>
  </div>
);
