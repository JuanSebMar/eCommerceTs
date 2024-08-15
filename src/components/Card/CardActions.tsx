import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface Props {
  onClickFavorite: () => void;
  onClickCart: () => void;
  id: string;
}
export const CardActions = ({ onClickFavorite, onClickCart, id }: Props) => {
  const productUrl = `${window.location.origin}/cart/${id}`;

  const handleShare = () => {
    navigator.clipboard
      .writeText(productUrl) // Copia la URL al portapapeles
      .then(() => {
        toast.success("enlace copiado");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles", err);
        alert("Hubo un error al copiar el enlace");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: {
          xl: "190px",
          lg: "170px",
          md: "150px",
          sm: "95px",
          xs: "78px",
        },
        marginLeft: { lg: "15px", md: "12px", sm: "10px", xs: "8px" },
        justifyContent: "space-between",
      }}>
      <Box>
        <IconButton
          onClick={onClickFavorite}
          aria-label="add to favorites">
          <FavoriteIcon
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
        <IconButton
          onClick={handleShare}
          aria-label="share">
          <ShareIcon
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
      <Box>
        <IconButton onClick={onClickCart}>
          <AddShoppingCartIcon
            sx={{
              display: "flex",
              color: "black",
              fontSize: {
                xl: "30px",
                lg: "30px",
                md: "20px",
                sm: "15px",
                xs: "10px",
              },
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
