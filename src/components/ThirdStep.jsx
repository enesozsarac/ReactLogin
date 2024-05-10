import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

function ThirdStep({ setActiveStep, back }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailErr, setMailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && password.length > 6) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      Swal.fire({
        title: "Giris Yapildi",
        icon: "success",
      });
    } else if (!email) {
      mailErr(true);
    } else if (!password && password.length > 6) {
      setPasswordErr(true);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setMailErr(false);
    } else {
      setMailErr(true);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length > 6) {
      setPasswordErr(false);
    } else {
      setPasswordErr(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        type="email"
        margin="normal"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        error={mailErr}
        inputProps={{
          type: "email",
        }}
        helperText={mailErr ? "Please enter your email" : ""}
      />
      <TextField
        fullWidth
        type="password"
        margin="dense"
        placeholder="Şifre"
        value={password}
        onChange={handlePassword}
        error={passwordErr}
        inputProps={{
          type: "password",
        }}
        helperText={passwordErr ? "Please enter your password" : ""}
      />
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
        <Button type="submit" variant="contained">
          Next
        </Button>
        <Button onClick={back} variant="contained">
          Back
        </Button>
      </Stack>
    </Box>
  );
}

export default ThirdStep;
