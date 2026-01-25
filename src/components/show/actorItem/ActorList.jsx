import { ActorItem } from "./ActorItem";
import { Box, Typography } from "@mui/material";

export const ActorList = ({ cast }) => {
  return (
    <>
    <Typography sx={{fontSize:"25px",color:"white"}}>Starring</Typography>
      <Box sx={{ display: "flex" ,flexWrap: "wrap",gap:"10px" }}>
        {cast.map((cas) => (
          <ActorItem
            key={cas.character?.id}
            name={cas.person?.name}
            image={cas.person?.image?.medium}
          />
        ))}
      </Box>
    </>
  );
};
