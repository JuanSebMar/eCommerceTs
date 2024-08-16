import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Box, Button } from "@mui/material";
import googleImage from "../../common/assets/googleImage.png";
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
      <Button
        onClick={() => {
          onSignInWithGoogle();
        }}>
        <img src={googleImage} />
      </Button>
    </Box>
  );
};
