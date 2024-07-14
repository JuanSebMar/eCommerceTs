import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../../auth/components/Register";

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Box, Typography } from "@mui/material";
import { GoogleSingIn } from "../../auth/components/GoogleSingIn";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onLogin = () => {
    navigate("/login", {
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
      <Typography>Registro</Typography>

      <FormControl sx={{ width: "30ch" }}>
        <OutlinedInput
          placeholder="Please enter user"
          type="user"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ width: "30ch" }}>
        <OutlinedInput
          placeholder="Please enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl sx={{ width: "30ch" }}>
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

      <Box sx={{ display: "flex", gap: "2px" }}>
        <button
          className="btn btn-primary mt-2"
          onClick={onLogin}>
          Login
        </button>
        <Register
          newUser={newUser}
          email={email}
          password={password}
        />
        <GoogleSingIn />
      </Box>
    </Box>
  );
};
