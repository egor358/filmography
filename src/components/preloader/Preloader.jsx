import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

export const Preloader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
