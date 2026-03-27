import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router";

export const Auth = () => {
  return (
    <Grid
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Outlet />
    </Grid>
  );
};
