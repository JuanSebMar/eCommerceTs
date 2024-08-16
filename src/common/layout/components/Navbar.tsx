import { CustomCategoriesList } from "../../components/CustomCategoriesList";
import { SmoothScrollLink } from "../../components/SmoothScrollLink";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useAuth } from "../../../auth/AuthContext";
import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchBar from "./SearchBar";
import { CustomListUsers } from "../../components/CustomListUsers";

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
    <AppBar
      sx={{
        display: "flex",
        backgroundColor: "black",
      }}>
      <Toolbar
        sx={{
          display: "flex",
          marginLeft: "20px",
          gap: "300px",
          minHeight: "50px",
          backgroundColor: "black",
        }}>
        <Link to={"/"}>
          <IconButton sx={{ marginTop: "10px" }}>
            <StorefrontIcon sx={{ color: "white" }} />
          </IconButton>
        </Link>
        <SearchBar items={""} />
      </Toolbar>

      <Toolbar
        sx={{
          gap: "10px",
        }}>
        {!user ? (
          <Box
            sx={{
              display: "flex",
              width: "100vw",
              justifyContent: "space-between",
            }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "11.5px",
                }}>
                <Link to={"/dashboard"}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      fontSize: 20,
                      color: "#ffffff",
                    }}>
                    DashBoard
                  </Typography>
                </Link>
                <SmoothScrollLink to="#contac">
                  <Typography
                    sx={{
                      flexGrow: 1,
                      fontSize: 20,
                      color: "#ffffff",
                    }}>
                    Contact
                  </Typography>
                </SmoothScrollLink>
              </Box>

              <Box>
                <CustomCategoriesList />
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", marginTop: "8px" }}>
                {navLinks.map((item) => (
                  <Link
                    to={item.link}
                    key={item.title}>
                    <IconButton>{item.icon}</IconButton>
                  </Link>
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "10px",
                  textDecoration: "none",
                  marginTop: "11.5px",
                }}>
                <Link to={"/login"}>
                  <Typography sx={{ fontSize: "20px", color: "white" }}>
                    Log In
                  </Typography>
                </Link>
                <Link to={"/singin"}>
                  <Typography sx={{ fontSize: "20px", color: "white" }}>
                    Sing In
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              width: "100vw",
              justifyContent: "space-between",
            }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "11.5px",
                  }}>
                  <Link to={"/dashboard"}>
                    <Typography
                      sx={{
                        flexGrow: 1,
                        fontSize: 20,
                        color: "#ffffff",
                      }}>
                      DashBoard
                    </Typography>
                  </Link>
                  <SmoothScrollLink to="#contac">
                    <Typography
                      sx={{
                        flexGrow: 1,
                        fontSize: 20,
                        color: "#ffffff",
                      }}>
                      Contact
                    </Typography>
                  </SmoothScrollLink>
                </Box>

                <Box>
                  <CustomCategoriesList />
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navLinks.map((item) => (
                <Link
                  to={item.link}
                  key={item.title}>
                  <IconButton>{item.icon}</IconButton>
                </Link>
              ))}
              <CustomListUsers />
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
