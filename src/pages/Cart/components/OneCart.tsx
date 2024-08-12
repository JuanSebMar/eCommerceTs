import { Box, CardMedia, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneProduct } from "../../../common/services/productService";
import { CardActions } from "../../../components/Card/CardActions";
import { CustomButton } from "./CustomButton";
interface Product {
  image?: string;
  description?: string;
  title?: string;
  price?: string;
  id: string;
}
export const OneCart = (handleAddToCart, handleAddFavorites) => {
  const [product, setProduct] = useState<Product>();
  const params = useParams();

  useEffect(() => {
    const prevProduct = params.id;
    console.log(prevProduct);
    const data = async () => {
      const res = await getOneProduct(prevProduct);
      setProduct(res);
    };
    data();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginTop: 10,
          backgroundColor: "white",
          borderRadius: "5px",
          margin: " 120px 50px 50px 80px",
          maxWidth: "100%",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: 300, padding: "20px" }}>
            <CardMedia
              component="img"
              image={product.image}
              src={product.image}
              sx={{
                borderRadius: "5px",
              }}
            />
          </Box>
          <Box sx={{ maxWidth: "500px", flexDirection: "column", padding: 10 }}>
            <Typography
              sx={{
                justifyContent: "center",
                fontSize: "15px",
                color: "black",
              }}>
              {product.title}
            </Typography>
            <Divider />
            <Typography
              sx={{
                justifyContent: "center",
                fontSize: "15px",
                color: "black",
              }}>
              {product.description}
            </Typography>
            <Typography
              sx={{
                justifyContent: "center",
                fontSize: "15px",
                color: "black",
              }}>
              Price:$
              {product.price}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "50px", justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <CustomButton
                text={"Buy Now"}
                onClick={() => {}}
              />
              <CustomButton
                text={"Buy Now"}
                onClick={() => {}}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}>
              <CardActions
                onClickCart={() => handleAddToCart(product.id)}
                onClickFavorite={() => handleAddFavorites(product.id)}
                id={""}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
