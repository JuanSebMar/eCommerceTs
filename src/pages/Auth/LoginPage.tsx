import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../../auth/components/LogIn";
import { GoogleSingIn } from "../../auth/components/GoogleSingIn";

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Box, Typography } from "@mui/material";

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
        width: "100%",
        flexDirection: "column",
        gap: "8px",
        margin: "100px 0 0 0",
        alignItems: "center",
      }}>
      <Typography>Login</Typography>

      <FormControl sx={{ m: 1, width: "30ch" }}>
        <OutlinedInput
          placeholder="Please enter user"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "30ch" }}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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

      <Box sx={{ display: "flex", gap: "4px" }}>
        <LogIn
          email={email}
          password={password}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={onRegister}>
          Registro
        </button>
        <GoogleSingIn />
      </Box>
    </Box>
  );
};
