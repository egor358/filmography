import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Show } from "./components/show/Show.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import { MainProvider } from "./components/context/mainContext.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Auth } from "./components/layout/Auth.jsx";
import { Login } from "./components/auth/Login.jsx";
import { SingleActor } from "./components/show/actorItem/SingleActor.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "show/:id",
        element: <Show />,
      },
      {
        path: "actor/:actorId",
        element: <SingleActor />,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "Login",
            element: <Login />,
          },
          {
            path: "Registration",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </StrictMode>,
);
