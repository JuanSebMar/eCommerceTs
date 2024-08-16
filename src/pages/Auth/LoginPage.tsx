import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "../../auth/components/LogIn";
import { GoogleSingIn } from "../../auth/components/GoogleSingIn";

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Box, Button, Divider, Typography } from "@mui/material";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onRegister = () => {
    navigate("/singin", {
      replace: true,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "60px",
        padding: "40px",
        marginTop: "130px",
        marginLeft: "40px",
      }}>
      <Box sx={{ width: "350px" }}>
        <Typography
          sx={{
            fontSize: "40px",
          }}>
          Ingresa tu e-mail y contrasena o ingresa usando google
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          width: "300px",
          height: "400px",
          borderRadius: "8px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: "3px",
            alignItems: "center",
          }}>
          <Typography>Ingresa tus datos</Typography>
          <FormControl sx={{ m: 1, width: "30ch" }}>
            <OutlinedInput
              placeholder="Please enter user"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "30ch" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
            }}>
            <LogIn
              email={email}
              password={password}
            />
            <button
              className="btn btn-primary mt-2"
              onClick={onRegister}>
              Registro
            </button>
          </Box>

          <Typography>O</Typography>
          <GoogleSingIn />
        </Box>
      </Box>
    </Box>
  );
};
