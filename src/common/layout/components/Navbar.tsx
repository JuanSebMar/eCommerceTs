import { CustomCategoriesList } from "../../components/CustomCategoriesList";
import { SmoothScrollLink } from "../../components/SmoothScrollLink";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LogOut } from "../../../auth/components/LogOut";
import BadgeAvatars from "../../components/UserIcon";
import { useAuth } from "../../../auth/AuthContext";
import { Link, NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchBar from "./SearchBar";

const navLinks = [
  {
    title: "cart",
    link: "/cartpage",
    icon: <ShoppingCartIcon sx={{ color: "#ffffff" }} />,
  },
  {
    title: "facorites",
    link: "/favorites",
    icon: <FavoriteIcon sx={{ color: "#ffffff" }} />,
  },
];

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          backgroundColor: "black",
        }}>
        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            marginLeft: "20px",
            gap: "300px",
          }}>
          <Link to={"/"}>
            <IconButton sx={{ marginTop: "10px" }}>
              <StorefrontIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <SearchBar items={""} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Toolbar sx={{ display: "flex", gap: "10px" }}>
            <Link to={"/dashboard"}>
              <Typography sx={{ flexGrow: 1, fontSize: 20, color: "#ffffff" }}>
                DashBoard
              </Typography>
            </Link>

            <SmoothScrollLink to="#contac">
              <Typography sx={{ flexGrow: 1, fontSize: 20, color: "#ffffff" }}>
                Contact
              </Typography>
            </SmoothScrollLink>
            <CustomCategoriesList />
          </Toolbar>
          {/* . */}
          <Toolbar sx={{ display: "flex", gap: "10px" }}>
            {user ? (
              <Box sx={{ marginRight: 45 }}>
                {navLinks.map((item) => (
                  <Link
                    to={item.link}
                    key={item.title}>
                    <IconButton>{item.icon}</IconButton>
                  </Link>
                ))}
              </Box>
            ) : (
              <Box sx={{ gap: 2 }}>
                {navLinks.map((item) => (
                  <Link
                    to={item.link}
                    key={item.title}>
                    <IconButton>{item.icon}</IconButton>
                  </Link>
                ))}
              </Box>
            )}
            <Box sx={{ display: "flex" }}>
              {user ? (
                <Accordion
                  sx={{
                    position: "absolute",
                    zIndex: 9999,
                    right: 0,
                    top: 5,
                  }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
                    sx={{ backgroundColor: "black", maxHeight: "20px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {user && <BadgeAvatars />}
                      <Typography
                        sx={{
                          fontSize: 20,
                          color: "#ffffff",
                          minWidth: "max-content",
                        }}>
                        {user && user.displayName}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      fontSize: 10,
                      backgroundColor: "black",
                    }}>
                    {user && <LogOut />}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item nav-link  ${isActive ? "active" : ""}`
                    }
                    to="/singin">
                    <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                      SingIn
                    </Typography>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item nav-link  ${isActive ? "active" : ""}`
                    }
                    to="/login">
                    <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                      Login
                    </Typography>
                  </NavLink>
                </>
              )}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};
