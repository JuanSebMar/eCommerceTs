import { Button } from "@mui/material";
export const CustomButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={() => onClick()}
      sx={{
        backgroundColor: "blue",
        width: { lg: "200px", sm: "100px", xs: " 50px" },
        maxHeight: {
          lg: "40px",
          sm: "18px",
          xs: "15px",
        },
        fontSize: { lg: "15px", sm: "10px", xs: "7px" },
      }}
      variant="contained">
      {text}
    </Button>
  );
};
