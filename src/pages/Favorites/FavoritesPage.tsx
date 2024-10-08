import { Box, Typography } from "@mui/material";
import { useAuth } from "../../auth/AuthContext";
import { ProductFavorite } from "./ProductFavorite";

export const FavoritesPage = () => {
  const { user } = useAuth();
  if (user) {
    return <ProductFavorite />;
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "150px",
        }}>
        <Typography sx={{ fontSize: "50px" }}>
          Debes Loguarte para ver tus favoritos
        </Typography>
      </Box>
    );
  }
};
