import {
  Box,
  Button,
  CardMedia,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomButton } from "./CustomButton";
import { useCart } from "../../../common/hooks/useCart";

export const ListCart = () => {
  const {
    cleanCart,
    cart,
    handleAddToCart,
    handleLessToCart,
    handleRemoveItem,
  } = useCart();

  return (
    <Box sx={{ height: "100%", marginTop: "80px", display: "flex" }}>
      <Paper
        style={{
          padding: "20px",
          maxWidth: "700px",
          margin: "20px auto",
        }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Lista de Productos</Typography>
          <CustomButton
            onClick={cleanCart}
            text={"Limpiar Carrito"}
          />
        </Box>
        <Box>
          {cart.length > 0 &&
            cart.map((product, index) => (
              <Box
                key={index}
                sx={{}}>
                <ListItem>
                  <CardMedia
                    component={"img"}
                    image={product.image}
                    key={index}
                    sx={{ width: "60px", marginRight: "20px" }}
                  />
                  <ListItemText
                    sx={{
                      textOverflow: "ellipsis",
                      maxWidth: "200px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      minWidth: "200px",
                    }}>
                    {product.title}
                  </ListItemText>
                  <ListItemText sx={{ width: "150px", margin: "15px" }}>
                    Quantity:{product.quantity}
                  </ListItemText>

                  <ListItemText
                    sx={{
                      width: "150px",
                      flexDirection: "wrap",
                      flexWrap: "wrap",
                    }}>
                    Price: ${product.price}
                  </ListItemText>
                  <Button
                    sx={{ width: "10px" }}
                    onClick={() => handleAddToCart(product.id)}>
                    +
                  </Button>
                  <Button
                    sx={{ width: "10px" }}
                    onClick={() => handleLessToCart(product.id)}>
                    -
                  </Button>
                  <IconButton
                    sx={{ width: "10px" }}
                    onClick={() => handleRemoveItem(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <Divider />
              </Box>
            ))}
        </Box>
      </Paper>
    </Box>
  );
};
