import {
  Button,
  CardMedia,
  Box,
  Divider,
  IconButton,
  Typography,
  ButtonGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import imagerayo from "../../../common/assets/rayoProducts.png";
import imagebolsa from "../../../common/assets/bolsaproduct.png";
import { CustomButton } from "./CustomButton";
import { useCart } from "../../../common/hooks/useCart";
import { Link } from "react-router-dom";

export const ListCart = () => {
  const {
    cleanCart,
    cart,
    handleAddToCart,
    handleLessToCart,
    handleRemoveItem,
  } = useCart();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        marginBottom: "50px",
        gap: "20px",
      }}>
      <Box
        sx={{
          width: "700px",
          minHeight: "400px",
          height: "100%",
          marginTop: "170px",
          marginLeft: "30px",
          borderRadius: "8px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}>
        <Box>
          {cart.length > 0 ? (
            <>
              <Box sx={{ display: "flex", margin: "10px", flexWrap: "wrap" }}>
                <Box>
                  <Typography sx={{ fontSize: "25px" }}>Productos</Typography>
                </Box>
                <Box sx={{ marginLeft: "10px" }}>
                  <img
                    style={{ width: "30px" }}
                    src={imagerayo}
                  />
                </Box>
              </Box>
              <Divider />
            </>
          ) : (
            <Box sx={{ display: "none" }}></Box>
          )}

          <Box sx={{}}>
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <Box
                  key={index}
                  sx={{}}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "20px",
                    }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "15px",
                      }}>
                      <Box>
                        <CardMedia
                          component={"img"}
                          image={product.image}
                          key={index}
                          sx={{ width: "80px", marginRight: "20px" }}
                        />
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            height: "40px",
                            width: "550px",
                            justifyContent: "space-between",
                          }}>
                          <Typography
                            sx={{
                              fontSize: "24px",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}>
                            {product.title}
                          </Typography>
                          <IconButton
                            sx={{ width: "px9", color: "red" }}
                            onClick={() => handleRemoveItem(product.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}>
                          <ButtonGroup
                            variant="outlined"
                            aria-label="Basic button group">
                            <Button
                              onClick={() => {
                                handleAddToCart(product.id);
                              }}>
                              +
                            </Button>
                            <Button>{product.quantity}</Button>
                            <Button
                              onClick={() => {
                                handleLessToCart(product.id);
                              }}>
                              -
                            </Button>
                          </ButtonGroup>
                          <Typography sx={{ fontSize: "20px" }}>
                            ${product.price}
                          </Typography>
                        </Box>
                        <Typography sx={{ marginTop: "7px" }}>
                          + 10 disponibles
                        </Typography>
                      </Box>
                    </Box>
                    <Divider sx={{ marginTop: "8px" }} />
                  </Box>
                </Box>
              ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}>
                <Box
                  sx={{
                    flexDirection: "column",
                  }}>
                  <Box>
                    <img
                      style={{ width: "190px", marginLeft: "50px" }}
                      src={imagebolsa}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}>
                      Empieza un carrito de compras!
                    </Typography>
                    <Typography>
                      suma productos y consigue envio gratis
                    </Typography>
                    <Link to={"/"}>
                      <Button
                        sx={{
                          backgroundColor: "blue",
                          marginLeft: "13px",
                          width: { lg: "270px", sm: "100px", xs: " 50px" },
                          height: {
                            lg: "40px",
                            sm: "18px",
                            xs: "15px",
                          },
                          fontSize: { lg: "15px", sm: "10px", xs: "7px" },
                        }}
                        variant="contained">
                        Descubre mas productos
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        {cart.length > 0 ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "170px",
                width: "300px",
                height: "230px",
                borderRadius: "8px",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}>
              <Box sx={{ marginTop: "10px", marginLeft: "4px" }}>
                <Typography sx={{ fontSize: "20px" }}>
                  Resumen de compra
                </Typography>
                <Divider />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "6px",
                  justifyContent: "space-between",
                  padding: "5px",
                }}>
                <Box>
                  <Typography>Producto</Typography>
                  <Typography>Envio</Typography>
                  <Typography sx={{ marginTop: "20px" }}>Total</Typography>
                </Box>
                <Box>
                  <Typography>
                    {cart && cart.map((product) => `$${product.price}`)}
                  </Typography>
                  <Typography>$3,99</Typography>
                  <Typography sx={{ marginTop: "20px" }}>
                    {cart && cart.map((product) => `$${product.price}`)}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}>
                <CustomButton
                  text={"Continuar compra"}
                  onClick={() => {}}></CustomButton>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                marginTop: "170px",
                width: "300px",
                height: "200px",
                borderRadius: "8px",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}>
              <Typography>Resumen de compra</Typography>
              <Divider />
              <Typography sx={{ marginTop: "10px" }}>
                Aqui veras el importe de tu compra una vez que agregues
                productos
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
