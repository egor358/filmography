import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const TitleSingleSlide = ({ id, name, image, time, premiered }) => {
  const duration = time || "N/A";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "70vh",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <img
        src={image || "https://via.placeholder.com/1280x720"}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 4,
          background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
          color: "white",
        }}
      >
        <Typography variant="h3" sx={{ mb: 1 }}>
          {name}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}>
          {duration}
        </Typography>

        {premiered && (
          <Typography variant="body1" sx={{ mb: 3 }}>
            {premiered}
          </Typography>
        )}

        <Button
          component={Link}
          to={`/show/${id}`}
          variant="contained"
          size="large"
          sx={{ bgcolor: "#E50914", "&:hover": { bgcolor: "#b2070f" } }}
        >
          Show more
        </Button>
      </Box>
    </Box>
  );
};

export default TitleSingleSlide;
