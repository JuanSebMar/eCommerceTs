import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../../auth/components/Register";
import { GoogleSingIn } from "../../auth/components/GoogleSingIn";
import imageForm from "../../common/assets/imgFormulario.png";

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Box, Typography } from "@mui/material";

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
        marginTop: "150px",
        height: "100vh",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            height: "500px",

            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifySelf: "center",
            }}>
            <Box>
              <img
                style={{ width: "180px", marginLeft: "110px" }}
                src={imageForm}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "70px",
                gap: "5px",
              }}>
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
            </Box>

            <Box sx={{ display: "flex", gap: "2px", marginLeft: "120px" }}>
              <button
                className="btn btn-primary mt-2"
                onClick={onLogin}>
                Log in
              </button>
              <Register
                newUser={newUser}
                email={email}
                password={password}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            marginTop: "20px",
            width: "300px",
            height: "200px",
            borderRadius: "8px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}>
          <Typography sx={{ fontSize: "20px", textAlign: "center" }}>
            Inicia sesion mas rapido con Google
          </Typography>
          <Box sx={{ display: "flex", marginLeft: "80px" }}>
            <GoogleSingIn />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
