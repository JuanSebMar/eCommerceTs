import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOneProduct } from "../../../products/services/productService";
import { useFavorites } from "../../../products/hooks/useFavorites";

import { CustomButton } from "./CustomButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { Box, CardMedia, Divider, Typography } from "@mui/material";
import { useCart } from "../../../products/hooks/useCart";

interface Product {
  image?: string;
  description?: string;
  title?: string;
  price?: string;
  id: string;
}
export const OneCart = () => {
  const { handleFavorites } = useFavorites();
  const { handleAddToCart } = useCart();
  const [product, setProduct] = useState<Product>();
  const params = useParams();

  useEffect(() => {
    const prevProduct = params.id;
    const data = async () => {
      const res = await getOneProduct(prevProduct);
      setProduct(res);
    };
    data();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: "5px",
        margin: { lg: "120px 50px 50px 50px", xs: "100px 10px 10px 10px" },
        width: { lg: "1100px", xs: "290px" },
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}>
      {product && (
        <Box
          sx={{
            display: "flex",
            height: { lg: "480px", xs: "180px" },
          }}>
          <Box
            sx={{
              padding: "20px",
            }}>
            <CardMedia
              sx={{
                width: { lg: "260px", xs: "50px", sm: "150px" },
                marginTop: { lg: "25px", xs: "8px" },
              }}
              component="img"
              image={product.image}
              src={product.image}
            />
          </Box>
          <Box
            sx={{
              width: { lg: "500px", xs: "100px" },
              flexDirection: "column",
              padding: { lg: "10px", xs: "3px" },
              marginTop: { lg: "45px", xs: "5px" },
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}>
              <Typography
                sx={{
                  justifyContent: "center",
                  fontSize: { lg: "23px", md: "12px", sm: "16px", xs: "8px" },
                  color: "black",
                }}>
                {product.title}
              </Typography>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon
                  onClick={() => handleFavorites(product.id)}
                  sx={{
                    fontSize: {
                      xl: "30px",
                      lg: "30px",
                      md: "20px",
                      sm: "15px",
                      xs: "10px",
                    },
                    color: "black",
                  }}
                />
              </IconButton>
            </Box>

            <Divider />
            <Typography
              sx={{
                justifyContent: "center",
                fontSize: { lg: "19px", md: "8px", sm: "11px", xs: "8px" },
                color: "black",
                marginTop: { lg: "25px", xs: "5px" },
              }}>
              {product.description}
            </Typography>
            <Typography
              sx={{
                justifyContent: "center",
                marginTop: "5px",
                fontSize: { lg: "35px", sm: "20px", xs: "9px" },
                color: "black",
              }}>
              ${product.price}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { lg: "260px", xs: "80px" },
              height: { lg: "420px", xs: "170px" },
              marginTop: { lg: "30px", xs: "5px" },
              marginLeft: { lg: "15px", xs: "9px" },
              borderRadius: "8px",
              boxShadow:
                "rgba(0, 0, 0, 0.13) 0px 7px 16px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { lg: "10px", xs: "5px" },
                marginTop: { lg: "30px", xs: "40px" },
                marginLeft: { lg: "30px", xs: "9px" },
              }}>
              <Typography sx={{ color: "green" }}>
                llega gratis mañana
              </Typography>
              <Typography sx={{ color: "green" }}>Devolucion gratis</Typography>
              <Typography sx={{ color: "black", marginTop: "35px" }}>
                Stock disponible
              </Typography>
              <Typography sx={{ color: "black" }}>
                Cantidad: 1 unidad
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { lg: "10px", xs: "5px" },
                marginTop: { lg: "20px", xs: "10px" },
                marginLeft: { lg: "30px", xs: "9px" },
              }}>
              <CustomButton
                text={"Buy Now"}
                onClick={() => {}}
              />
              <CustomButton
                text={"Add to cart"}
                onClick={() => {
                  handleAddToCart(product.id);
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
