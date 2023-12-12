import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrationRequested } from "../../redux/silces/auth.silce";

const Registration = () => {
  const [showPassword, setshowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(
      registrationRequested({
        firstname: "saikat",
        lastname: "Djhjoe",
        phoneNo: "+1234567890",
        email: "john.doe@example.com",
        password: "secretpassword",
        address: "123 Main Street",
      })
    );
    navigate("/");
  };

  return (
    <Stack spacing={2} direction="column">
      {/*firstname form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-firstname">
          firstname
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-firstname"
          // type={showPassword ? "text" : "firstname" }
          label="firstname"
        />
      </FormControl>

      {/* lastname form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-lastname">lastname</InputLabel>
        <OutlinedInput
          id="outlined-adornment-lastname"
          // type={showPassword ? "text" : "lastname"}
          label="lastname"
        />
      </FormControl>
      {/* email form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          // type={showPassword ? "text" : "email"}
          label="email"
        />
      </FormControl>

      {/* password form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      {/* confirm password form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-confirmpassword">
          confirm password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-confirmpassword"
          type={showPassword ? "text" : "confirmpassword"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="confirmpassword"
        />
      </FormControl>
      {/* buttons  */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleRegister}>
          REGISTER
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/login");
          }}
        >
          BACK TO LOGIN
        </Button>
      </Stack>
    </Stack>
  );
};

export default Registration;