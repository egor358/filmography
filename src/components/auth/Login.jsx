import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Заполни все поля");
      return;
    }

    try {
      const response = await axios.post(
        "https://watchit-api.onrender.com/auth/login",
        { email, password },
      );
      console.log(response);
      
      const token = response.data.access_token;
      console.log(token);
      localStorage.setItem("token", token);
      alert("Вход выполнен!");
      navigate("/")
    } catch (error) {
      setError("Неверный email или пароль");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        maxWidth: 400,
        mx: "auto",
        p: 4,
      }}
    >
      <Typography textAlign="center" color="#FEFEFA">
        Login
      </Typography>

      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
        />

        <button type="submit">Войти</button>
      </form>

      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};
