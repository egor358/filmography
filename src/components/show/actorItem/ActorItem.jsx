import React, { useEffect, useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ActorItem = ({  person }) => {
  const imageActor = person?.image?.medium;
  const name = person.name;
  const actorId = person?.id;
  return (
    <Link to={`/actor/${actorId}`}>
      <Box
        sx={{
          display: "flex",
          width: "200px",
          gap: "10px",
          color: "white",
          paddingLeft: "40px",
          "&:hover": { border: "2px solid red" },
        }}
      >
        <CardMedia
          sx={{
            width: "100px",
            height: "100px",
          }}
          component="img"
          image={imageActor}
        />
        <Typography>{name}</Typography>
      </Box>
    </Link>
  );
};
