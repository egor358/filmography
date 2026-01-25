import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../menu/Menu";
import { Footer } from "../footer/Footer";

export const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </div>
  );
};
