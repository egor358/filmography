import { ActorItem } from "./ActorItem";
import { Box, Typography } from "@mui/material";

export const ActorList = ({ cast }) => {
  console.log(cast);
  
  return (
    <>
    <Typography sx={{fontSize:"25px",color:"white", pl:"40px"}}>Starring</Typography>
      <Box sx={{ display: "flex" ,flexWrap: "wrap",gap:"10px" }}>
        {cast.map((cas) => (
          <ActorItem
            key={cas.person?.id}
            {...cas}
          />
        ))}
      </Box>
    </>
  );
};
