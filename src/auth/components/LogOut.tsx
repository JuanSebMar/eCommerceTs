import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Typography } from "@mui/material";

export const LogOut: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      setUser(null);

      navigate("/", {
        replace: true,
      });
      console.log("Usuario ha cerrado sesión exitosamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <Button onClick={onLogout}>
      <Box sx={{ display: "flex" }}>
        <LogoutIcon sx={{ color: "#ffffff" }} />
        <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
          Cerrar sesión
        </Typography>
      </Box>
    </Button>
  );
};
