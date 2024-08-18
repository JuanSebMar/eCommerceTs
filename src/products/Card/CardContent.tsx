import { Box, Typography } from "@mui/material";

export interface Props {
  title?: string;
  price?: string;
  style?: React.CSSProperties;
}
export const CardContent = ({ title, price }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        Width: "60px",
        margin: "10px",
        color: "black",
        marginLeft: "25px",
      }}>
      <Typography
        sx={{
          textOverflow: "ellipsis",
          maxWidth: "150px",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}>
        {title}
      </Typography>
      <Typography>{` Precio: $${price},00 Us`}</Typography>
    </Box>
  );
};
