import { Box, Divider, List, ListItem, Modal, Typography } from "@mui/material";
import { Product } from "../../common/interfaces/interface";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  products: Product[];
}
export const FilterProducts: React.FC<ProductModalProps> = ({
  open,
  onClose,
  products,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ display: "flex", justifySelf: "center" }}>
      <Box
        sx={{
          justifySelf: "center",
          width: 500,
          maxHeight: "80vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          mt: 7,
          borderRadius: "10px",
          p: 2,
          overflowY: "scroll",
        }}>
        <Typography
          id="modal-title"
          variant="h6"
          component="h2">
          Productos Filtrados
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "wrap",
            flexWrap: "wrap",
            mt: 2,
          }}>
          {products.map((product, index) => (
            <List key={index}>
              <ListItem>
                <img
                  style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    padding: "5px",
                  }}
                  src={product.image}
                />
                {product.title}
                {product.price}
              </ListItem>
              <Divider />
            </List>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};
