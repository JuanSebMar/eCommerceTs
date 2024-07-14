import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Box, IconButton } from "@mui/material";
import { Google } from "@mui/icons-material";

export const GoogleSingIn: React.FC = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const onSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }

    navigate("/", {
      replace: true,
    });
  };

  return (
    <Box>
      <IconButton
        onClick={onSignInWithGoogle}
        sx={{
          display: "flex",
          borderRadius: "100px",
          marginTop: "10px",
        }}>
        <Google />
      </IconButton>
    </Box>
  );
};
