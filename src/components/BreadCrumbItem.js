import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const BreadCrumbItem = ({ anchor, name }) => {
  if (!anchor || !name) {
    return <span />;
  }

  return (
    <Link to={anchor} duration={1000} smooth>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", justifyContent: "center", md: "none" }
        }}
      >
        <MenuItem>
          <Typography color="black" textAlign="center">
            {name}
          </Typography>
        </MenuItem>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button color="inherit">{name}</Button>
      </Box>
    </Link>
  );
};

export default BreadCrumbItem;
