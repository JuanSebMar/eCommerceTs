import { ProductCard } from "../../products/Card/ProductCard";
import { Box, Typography } from "@mui/material";
import { useFavorites } from "../../products/hooks/useFavorites";
import { useCart } from "../../products/hooks/useCart";
import favoriteImage from "../../common/assets/favoritosimg.png";

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
        <Typography variant="h3">Tus favoritos</Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "50px",
            gap: "18px",
          }}>
          {favorites.length > 0 ? (
            favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                handleFavorites={handleFavorites}
              />
            ))
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
              <Box
                sx={{
                  width: "400px",
                  height: "200px",
                  alignContent: "center",
                  textAlign: "center",
                  marginLeft: "350px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.10) 0px 10px 26px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}>
                <img src={favoriteImage} />
                <Typography>No tienes Favoritos</Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
