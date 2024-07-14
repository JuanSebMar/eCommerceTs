import { Box } from "@mui/material";
import { ProductsContainer } from "./ProductsContainer";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}>
      <ProductsContainer />
    </Box>
  );
};
export default HomePage;
