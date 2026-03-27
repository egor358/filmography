import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Rating } from "@mui/material";

export const SingleItemTabs = ({ description, series, rating, premiered }) => {
  const [enterDescription, setEnterDescription] = useState(false);
  const [showSeries, setShowSeries] = useState(false);

  return (
    <>
      <Box
        className="container"
        sx={{
          minHeight: "145px",
          display: "flex",
          flexDirection: "column",
          margin: "35px 25px",
          paddingLeft: "5px",
          color: "#D2D2D2",
          gap: "10px",
          border: "solid 3px #D13B22",
        }}
      >
        <Box
          className="button"
          sx={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#555555",
                padding: "5px 20px",
                borderBottom: "2px solid red",
              },
            }}
            onClick={() => {
              setEnterDescription(!enterDescription);
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#555555",
                padding: "5px 20px",
                borderBottom: "2px solid red",
              },
            }}
            onClick={() => {
              setShowSeries(!showSeries);
            }}
          >
            Series
          </Typography>
        </Box>
        <Box>
          {enterDescription ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            false
          )}

          {showSeries
            ? series.map((ep) => (
                <Box
                  key={ep.id}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Typography sx={{ flex: "1" }}>
                    Season {ep.season}, Episode {ep.number}: {ep.name}
                  </Typography>
                  <Typography sx={{ flex: "1" }}>{premiered}</Typography>
                  <Stack display="flex" flexDirection="row" alignItems="center">
                    <Rating value={rating?.average} precision={0.5} />
                    <Typography sx={{ flex: "1" }}>
                      {rating?.average}
                    </Typography>
                  </Stack>
                </Box>
              ))
            : false}
        </Box>
      </Box>
    </>
  );
};
