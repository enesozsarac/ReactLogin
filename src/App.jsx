import { useState } from "react";
import "./App.css";
import { Box, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <div className="login">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <StepLabel>Isim Soyisim</StepLabel>
              <StepContent>
                <FirstStep setActiveStep={setActiveStep} />
              </StepContent>
            </Step>

            <Step>
              <StepLabel>Yaş - Telefon Numarası</StepLabel>
              <StepContent>
                <SecondStep setActiveStep={setActiveStep} back={handleBack} />
              </StepContent>
            </Step>

            <Step>
              <StepLabel>Email Şifre</StepLabel>
              <StepContent>
                <ThirdStep setActiveStep={setActiveStep} back={handleBack} />
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
}

export default App;
