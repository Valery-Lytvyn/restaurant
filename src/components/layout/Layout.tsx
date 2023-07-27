import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import "../../app.css";

function Layout() {
  return (
    <Box className="app">
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
