import { Box } from "@mui/material";
import { CardActions } from "./CardActions";
import { CardContent } from "./CardContent";
import { CardImage } from "./CardImage";

export const ProductCard = ({ product, handleAddToCart, handleFavorites }) => {
  return (
    <Box
      sx={{
        width: "230px",
        height: "350px",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}>
      <CardImage
        image={product.image}
        id={product.id}
      />
      <CardContent
        title={product.title}
        price={product.price}
      />
      <CardActions
        onClickCart={() => handleAddToCart(product.id)}
        onClickFavorite={() => handleFavorites(product.id)}
        id={product.id}
      />
    </Box>
  );
};
