import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function SecondStep({ setActiveStep, back }) {
  const [age, setAge] = useState("");
  const [ageErr, setAgeErr] = useState(false);
  const [telNumber, setTelNumber] = useState("");
  const [telNumberErr, setTelNumberErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age && telNumber) {
      sessionStorage.setItem("ageStorage", age);
      sessionStorage.setItem("telNumberStorage", telNumber);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (!age) {
      setAgeErr(true);
    } else if (!telNumber) {
      setTelNumberErr(true);
    }
  };

  useEffect(() => {
    const savedAge = sessionStorage.getItem("ageStorage");
    const savedTelNumber = sessionStorage.getItem("telNumberStorage");
    if (savedAge && savedTelNumber) {
      setAge(savedAge);
      setTelNumber(savedTelNumber);
    }
    sessionStorage.clear();
  }, []);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        type="number"
        margin="normal"
        placeholder="Yaş"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        error={ageErr}
        inputProps={{
          type: "number",
        }}
        helperText={ageErr ? "Please enter your age" : ""}
      />
      <TextField
        fullWidth
        type="number"
        margin="dense"
        placeholder="Telefon Numarası"
        value={telNumber}
        onChange={(e) => setTelNumber(e.target.value)}
        error={telNumberErr}
        inputProps={{
          type: "number",
        }}
        helperText={telNumberErr ? "Please enter your tel number" : ""}
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

export default SecondStep;
