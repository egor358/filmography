import React from "react";
import { Box, Grid } from "@mui/material";
import SinglCard from "../singleCard/SinglCard";

export const CardList = ({ films, handleCardId }) => {
  return (
    <Box sx={{ p: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ width: "100%" }}
      >
        {films.map((el) => (
          <Grid key={el.id} size={{ xs: 4, sm: 4, md: 3 }}>
            <SinglCard
              id={el.id}
              name={el.name}
              image={el.image?.medium}
              time={el.schedule?.time}
              ended={el.ended}
              handleCardId={handleCardId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
