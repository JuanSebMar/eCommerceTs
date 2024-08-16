import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";
import { Suspense } from "react";
import CustomizedProgressBars from "../components/Spinner";

const AppLayOut = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Suspense fallback={<CustomizedProgressBars />}>
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Suspense>
      <Footer />
    </Box>
  );
};
export default AppLayOut;
