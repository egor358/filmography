import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardMedia } from "@mui/material";
import { Box } from "@mui/material";

function SinglCard({ id, name, time, image, handleCardId }) {
  return (
    <Card sx={{ position: "relative", width: "395px", height: "329px" }}>
      <CardMedia
        sx={{
          position: "absolute",
          objectFit: "contain",
        }}
        component="img"
        height="100%"
        image={image}
        alt="Paella dish"
      />
      <Box
        sx={{
          position: "absolute",
          objectPosition: "center",
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <CardContent
        sx={{
          flexDirection: "column",
          color: "#fff",
          position: "absolute",
          top: "40%",
        }}
      >
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {name}
        </Typography>

        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {time}
        </Typography>
        <Button
          onClick={() => handleCardId(id)}
          size="small"
          sx={{
            textTransform: "none",
            border: "1px solid #E50914",
            background: "#E50914",
            width: "100px",
            height: "30px",
            color: "#fff",
            fontSize: "12px",
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}

export default SinglCard;
