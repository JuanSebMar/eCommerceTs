import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { buttonStyles } from "../../common/styles/buttonStyles";
import { toast } from "react-toastify";

interface Props {
  onClickFavorite: () => void;
  onClickCart: () => void;
  id: string;
}
export const CardActions = ({ onClickFavorite, onClickCart, id }: Props) => {
  const styles = buttonStyles();
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
        width: "190px",
        marginLeft: "15px",
        justifyContent: "space-between",
      }}>
      <Box>
        <IconButton
          onClick={onClickFavorite}
          sx={styles.button}
          aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton
          onClick={handleShare}
          sx={styles.button}
          aria-label="share">
          <ShareIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>
      <Box>
        <IconButton
          sx={styles.button}
          onClick={onClickCart}>
          <IconShoppingCartPlus
            style={{
              display: "flex",
              color: "black",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
