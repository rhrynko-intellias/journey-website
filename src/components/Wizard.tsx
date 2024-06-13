import { Box, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";

type Props = {
  steps: {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    content: React.ReactNode;
  }[];
};

export function Wizard({ steps }: Props) {

  return (
    <Box mt={8}>
      <Stepper activeStep={0} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index} active={index === 0} expanded>
            <StepLabel>
              {typeof step.title === 'string' ? (
                <Typography variant="h6" fontWeight="600">{step.title}</Typography>
              ) : (
                <>{step.title}</>
              )}
              {step.subtitle}
            </StepLabel>
            <StepContent>
              {step.content}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
