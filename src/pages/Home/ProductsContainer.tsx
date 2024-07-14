import { Box } from "@mui/material";
import { useProducts } from "../../common/hooks/useProducts";

import { useCart } from "../../common/hooks/useCart";
import { useFavorites } from "../../common/hooks/useFavorites";
import { ProductCard } from "../../components/Card/ProductCard";

export const ProductsContainer = () => {
  const { products } = useProducts();
  const { handleAddToCart } = useCart();
  const { handleFavorites } = useFavorites();

  return (
    <Box
      sx={{
        margin: "80px  ",
        display: "flex ",
        flexDirection: "wrap",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}>
      {products.map((product) => (
        <ProductCard
          product={product}
          handleAddToCart={handleAddToCart}
          handleFavorites={handleFavorites}
          key={product.id}
        />
      ))}
    </Box>
  );
};
