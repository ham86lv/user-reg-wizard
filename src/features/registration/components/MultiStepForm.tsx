import React from "react";
import {Box, Step, StepLabel, Stepper} from "@mui/material";
import {useUserStore} from "../store/userStore";
import StepUserDetails from "./steps/StepUserDetails";
import StepAddressDetails from "./steps/StepAddressDetails";
import StepAccountDetails from "./steps/StepAccountDetails";
import StepReviewSubmit from "./steps/StepReviewSubmit";
import StepSuccess from "./steps/StepSuccess";


export default function MultiStepForm() {
  // Destructure currentStep and wizardSteps from the global state using the user store
  const {currentStep, wizardSteps} = useUserStore();

  // List of step components, each corresponding to a specific step in the form
  const stepComponents = [
    <StepUserDetails/>,
    <StepAddressDetails/>,
    <StepAccountDetails/>,
    <StepReviewSubmit/>,
    <StepSuccess/>
  ];

  // Function to render the step component based on current step
  function renderStep() {
    return stepComponents[currentStep] || null;
  }

  return (
    <Box width={'100%'} maxWidth={600} mx={'auto'} mt={2} px={2}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {wizardSteps.map((label: string) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={3} px={4}>
        {renderStep()}
      </Box>
    </Box>
  )
}