import React, { useEffect, useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";

export const ActorItem = ({ name, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "200px",
        gap: "10px",
        color: "white",
        "&:hover": { border: "2px solid red" },
      }}
    >
      <CardMedia
        sx={{
          width: "100px",
          height: "100px",
        }}
        component="img"
        image={image}
      />
      <Typography>{name}</Typography>
    </Box>
  );
};
