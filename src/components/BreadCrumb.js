import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import BreadCrumbItem from "./BreadCrumbItem";

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

const BreadCrumb = ({ items }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="more"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" }
          }}
        >
          {createBreadCrumbItems(items)}
        </Menu>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <div style={{ display: "flex" }}>{createBreadCrumbItems(items)}</div>
      </Box>
    </div>
  );
};

export default BreadCrumb;
