import { Box } from "@mui/material";

import { useCart } from "../../products/hooks/useCart";
import { useFavorites } from "../../products/hooks/useFavorites";
import { ProductCard } from "../../products/Card/ProductCard";
import { useProducts } from "../../products/context/ProductsContext";

export const ProductsContainer = () => {
  const { filteredProducts } = useProducts();
  const { handleAddToCart } = useCart();
  const { handleFavorites } = useFavorites();

  console.log(filteredProducts);

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
      {filteredProducts.map((product) => (
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
