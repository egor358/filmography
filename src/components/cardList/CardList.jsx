import React from "react";
import { Box,Grid } from "@mui/material";
import SinglCard from "../singleCard/SinglCard";


export const CardList = ({ films, handleCardId }) => {
  return (
    <div>
      <Box sx={{p:10}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {films.map((el) => ( 
            <SinglCard
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.image.medium}
              time={el.schedule.time}
              ended={el.ended}
              handleCardId={handleCardId}>
            </SinglCard>
            
          ))}
        </Grid>
      </Box>
    </div>
  );
};

