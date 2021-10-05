import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { useState } from "react";

function StepperStatues(props) {
  const[activeStep,setActiveStep] =useState(0)
  return (
    <Stepper activeStep={activeStep}>
      <Step>
        <StepLabel>Pending</StepLabel>
      </Step>
      <Step>
        <StepLabel>Opened</StepLabel>
      </Step>
      <Step>
        <StepLabel>Delivered</StepLabel>
      </Step>
    </Stepper>
  );
}

export default StepperStatues;
