import { Box } from "@mui/material";
import { ProductsContainer } from "./ProductsContainer";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginTop: "120px",
      }}>
      <ProductsContainer />
    </Box>
  );
};
export default HomePage;
