import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function FirstStep({ setActiveStep }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [surname, setSurname] = useState("");
  const [surnameError, setSurnameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && surname) {
      sessionStorage.setItem("nameStorage", name);
      sessionStorage.setItem("surnameStorage", surname);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (!name) {
      setNameError(true);
    } else if (!surname) {
      setSurnameError(true);
    }
  };

  useEffect(() => {
    const savedName = sessionStorage.getItem("nameStorage");
    const savedSurname = sessionStorage.getItem("surnameStorage");
    if (savedName && savedSurname) {
      setName(savedName);
      setSurname(savedSurname);
    }
    sessionStorage.clear();

  }, []);



  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
    if (e.target.validity.valid) {
      setSurnameError(false);
    } else {
      setSurnameError(true);
    }
  };

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          placeholder="Isim"
          value={name}
          onChange={handleNameChange}
          error={nameError}
          inputProps={{
            pattern: "[A-Za-z]+",
          }}
          helperText={
            nameError ? "Please enter your name (letters and spaces only)" : ""
          }
        />
        <TextField
          fullWidth
          margin="dense"
          placeholder="Soyisim"
          value={surname}
          onChange={handleSurnameChange}
          error={surnameError}
          inputProps={{
            pattern: "[A-Za-z]+",
          }}
          helperText={
            surnameError
              ? "Please enter your surname (letters and spaces only)"
              : ""
          }
        />
        <div>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default FirstStep;
