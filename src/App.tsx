import React from "react";
import {Box, Card, CardContent, Container, Typography} from "@mui/material";
import {MultiStepForm} from "./features"; // Importing the MultiStepForm component

export default function App() {
  return (
    <Container maxWidth='md'>
      <Box py={4}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant={'h4'} align="center" mt={3} mb={3} fontWeight={'bold'}>
              User Registration Wizard
            </Typography>
            <MultiStepForm/>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
