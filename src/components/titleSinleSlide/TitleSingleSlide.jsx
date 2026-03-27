import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const TitleSingleSlide = ({ id, name, image, time, premiered }) => {
  const duration = time || "N/A";

  return (
    <Box
      sx={{
        position: "relative",
        width: "290px",
        height: "265px",
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
      <img
        src={image || "https://via.placeholder.com/1280x720"}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 32,
          right: "30%",
          bottom: 0,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            mb: 0.5,
            fontSize: "16px",
            fontWeight: 600,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>

        <Typography sx={{ mb: 0.5, fontSize: "12px" }}>{duration}</Typography>

        {premiered && (
          <Typography sx={{ mb: 1.5, fontSize: "12px" }}>
            {premiered}
          </Typography>
        )}

        <Button
          component={Link}
          to={`/show/${id}`}
          variant="contained"
          size="small"
          sx={{
            alignSelf: "flex-start",
            minWidth: "auto",
            px: 1.5,
            py: 0.5,
            fontSize: "12px",
            bgcolor: "#E50914",
            "&:hover": { bgcolor: "#b2070f" },
          }}
        >
          Show more
        </Button>
      </Box>
    </Box>
  );
};

export default TitleSingleSlide;
