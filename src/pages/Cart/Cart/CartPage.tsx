import { Box, Typography } from "@mui/material";
import { useAuth } from "../../../auth/AuthContext";
import { ListCart } from "../components/ListCart";

export const CartPage = () => {
  const { user } = useAuth();
  if (user) {
    return <ListCart />;
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "150px",
        }}>
        <Typography sx={{ fontSize: "50px" }}>Debes loguearte</Typography>
      </Box>
    );
  }
};
