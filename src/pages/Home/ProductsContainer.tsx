import { Box } from "@mui/material";

import { useCart } from "../../products/hooks/useCart";
import { useFavorites } from "../../products/hooks/useFavorites";
import { ProductCard } from "../../products/Card/ProductCard";
import { Product } from "../../common/interfaces/interface";
import { getAllProducts } from "../../products/services/productService";
import { useQuery } from "@tanstack/react-query";

export const ProductsContainer = () => {
  const { data: products = [] } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
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
      {products.map((product: Product) => (
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
