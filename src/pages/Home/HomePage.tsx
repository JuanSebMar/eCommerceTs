import { Box } from "@mui/material";
import { ProductsContainer } from "./ProductsContainer";
import { SwiperProducts } from "../../products/components/SwiperProducts";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginTop: "120px",
        flexDirection: "column",
        gap: "5px",
      }}>
      <SwiperProducts />
      <ProductsContainer />
    </Box>
  );
};
export default HomePage;
