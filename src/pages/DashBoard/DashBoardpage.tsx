import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
const links = [
  { path: "users", label: "Users" },
  { path: "products", label: "Products" },
  { path: "categories", label: "Categories" },
  { path: "metrics", label: "Metrics" },
];
export const DashBoardpage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        marginTop: "128px",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "200px",
          padding: "20px",
          backgroundColor: "#000000",
          color: "white",
        }}>
        {links.map((link) => (
          <Link to={`/dashboard/${link.path}`}>
            <Typography>{link.label}</Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ width: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  );
};
