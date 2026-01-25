import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import { Add, Favorite } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import StyleIcon from "@mui/icons-material/Style";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const SingleItemHeader = ({ film }) => {
  return (
    <Box
      className="container"
      sx={{
        margin: "10px 25px",
        paddingLeft: "5px",
        color: "#D2D2D2",
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        border: "solid 3px #D13B22",
      }}
    >
      <Box
        className="name genres"
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "25px" }}>{film.name}</Typography>

          <Stack direction="row" alignItems="center">
            <Rating
              max={10}
              value={film.rating?.average ?? 0}
              precision={0.5}
            />{" "}
            <Typography sx={{ marginTop: "6px" }}>
              {film.rating?.average}
            </Typography>
          </Stack>
        </Box>
        <Box
          className="runtime premiered"
          sx={{ display: "flex", gap: "10px" }}
        >
          <Box
            className="googleIcon"
            sx={{
              display: "flex",
              gap: "10px",
              backgroundColor: "#6E757C",
              padding: "1px",
              width: "15px",
              height: "15px",
            }}
          >
            <GoogleIcon
              sx={{
                width: "13px",
                height: "13px",
                color: "white",
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "13px" }}>
            {film.runtime}mins &bull;
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {film.premiered} &bull;
          </Typography>
          <Box className="viewsIcon views" sx={{ display: "flex" }}>
            <VisibilityIcon
              sx={{
                marginTop: "5px",
                width: "10px",
                height: "10px",
                color: "white",
              }}
            />
            <Typography sx={{ fontSize: "13px" }}>{film.views}</Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            color: "#C42D26",
            fontSize: "17px",
            fontFamily: "-apple-system",
          }}
        >
          {film.genres?.[0]}
        </Typography>
        <Box
          className="shareIcon favorite add"
          sx={{ display: "flex", gap: "10px" }}
        >
          <ShareIcon
            sx={{
              padding: "3px",
              backgroundColor: "white",
              borderRadius: "12px",
              width: "17px",
              height: "17px",
              color: "#D22F27",
            }}
          />
          <Favorite
            sx={{
              padding: "3px",
              backgroundColor: "white",
              borderRadius: "12px",
              width: "17px",
              height: "17px",
              color: "#D22F27",
            }}
          />
          <AddIcon
            sx={{
              padding: "3px",
              backgroundColor: "white",
              borderRadius: "12px",
              width: "17px",
              height: "17px",
              color: "#D22F27",
            }}
          />
        </Box>
        <Box className="taggsIcon" sx={{ display: "flex", gap: "10px" }}>
          <StyleIcon sx={{ color: "#D22F27" }} />
          <Typography sx={{ color: "#D22F27" }}>TAGS:</Typography>
          <Typography>{film.genres}</Typography>
        </Box>
      </Box>

      <CardMedia
        sx={{
          width: "220px",
          height: "150px",
          borderRadius: "10px",
          margin: "15px",
        }}
        component="img"
        image={film.image?.medium}
      />
    </Box>
  );
};
