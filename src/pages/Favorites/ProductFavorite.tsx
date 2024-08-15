import { ProductCard } from "../../components/Card/ProductCard";
import { Box, Typography } from "@mui/material";
import { useFavorites } from "../../common/hooks/useFavorites";
import { useCart } from "../../common/hooks/useCart";

export const ProductFavorite = () => {
  const { favorites, handleFavorites } = useFavorites();
  const { handleAddToCart } = useCart();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "150px",
          gap: "10px",
          marginLeft: "20px",
        }}>
        <Typography variant="h3">Favorites</Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "50px",
            gap: "18px",
          }}>
          {favorites.length > 0 &&
            favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                handleFavorites={handleFavorites}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};
