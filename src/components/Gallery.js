import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

export default ({ tiles }) => {
  if (!Array.isArray(tiles)) {
    return <span />;
  }

  return (
    <GridList>
      {tiles.map((tile, index) => (
        <GridTile
          key={index}
          title={tile.title}
          actionIcon={
            <IconButton>
              <StarBorder color="white" />
            </IconButton>
          }
        >
          <img src={tile.image} alt={tile.title} />
        </GridTile>
      ))}
    </GridList>
  );
};
