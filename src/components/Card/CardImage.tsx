import { Link } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

export interface Props {
  id?: string;
  image?: string;
  style?: React.CSSProperties;
}

export const CardImage = ({ id, image }: Props) => {
  return (
    <Link to={`cart/${id}`}>
      <Box sx={{ padding: 4 }}>
        {image && (
          <CardMedia
            sx={{
              maxWidth: "180px",
              maxHeight: "150px",
              minHeight: "150px",
              borderRadius: "7px",
              objectFit: "contain",
            }}
            component="img"
            image={image}
            id={id}
          />
        )}
      </Box>
    </Link>
  );
};
