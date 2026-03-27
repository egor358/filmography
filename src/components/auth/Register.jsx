import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Preloader } from "../preloader/Preloader";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!email || !password || !confirmPassword) {
      setError("Fill in all fields");
      return;
    }
    setLoading(true);
    setError("");
    const formData = {
      email,
      password,
      confirmPassword,
    };
    try {
      const response = await axios.post(
        "https://watchit-api.onrender.com/auth/signup",
        formData,
      );
      console.log(response);
      setError("");
      setOpenSnackbar(true);
    } catch (error) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <Typography textAlign={"center"} color="#FEFEFA">
          Registration
        </Typography>
        <form
          onSubmit={handleRegister}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            style={{ height: "50px", borderRadius: "5px" }}
          />
          <Typography
            sx={{ color: "white", fontSize: "12px", marginLeft: "10px" }}
          >
            to short
          </Typography>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            style={{ height: "50px", borderRadius: "5px" }}
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            placeholder="Подтверди пароль"
            value={confirmPassword}
            style={{ height: "50px", borderRadius: "5px" }}
          />

          <button
            type="submit"
            style={{
              border: "none",
              color: "red",
              background: "none",
              cursor: "pointer",
            }}
          >
            {loading ? <Preloader /> : "REGISTER"}
          </button>
        </form>
        {error && (
          <Typography sx={{ color: "red" }}>Something went wrong</Typography>
        )}

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Registration successful
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

