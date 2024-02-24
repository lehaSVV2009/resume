import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Gallery = ({ tiles }) => {
  if (!Array.isArray(tiles)) {
    return <span />;
  }

  return (
    <ImageList variant="masonry" cols={2} gap={8} sx={{ height: 400 }}>
      {tiles.map((tile, index) => (
        <ImageListItem key={index}>
          <img
            srcSet={tile.image}
            src={tile.image}
            alt={tile.title}
            loading="lazy"
          />
          <ImageListItemBar title={tile.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;
