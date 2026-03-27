import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../header menu/Menu";
import { Footer } from "../footer/Footer";
import "../../App.css";

export const Layout = () => {
  return (
    <div className="layout">
      <ResponsiveAppBar />
      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
