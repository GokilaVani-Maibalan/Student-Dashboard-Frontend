import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { Button, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { steps } from "../assets/ClassProgress";
import { useEffect } from "react";

export const Class = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepperData, setStepperData] = React.useState([]);


  useEffect(()=>{
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const daysOfMonth = daysInMonth(month, year);
    setStepperData([...steps.slice(0,daysOfMonth + 1)]);
    setActiveStep(date.getDate())
  },[])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const movetoChoice = (choice) => {
    let date = new Date().getDate();
    choice <= date && setActiveStep(choice);
  };
  
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
  return (
    <div className="content">
      <Sidebar />
      <div className="head-cont">
        <Header title="Class" />
        <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {stepperData.map((step, index) => (
          <Step key={step.label}>
            <StepLabel onClick={()=>movetoChoice(index)}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography sx={{color:'black'}}>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled = {index === steps.length - 1}
                  >
                    {'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      </Box>
      </div>
    </div>
  );
};
