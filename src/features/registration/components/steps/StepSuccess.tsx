import React from "react";
import {Box, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

export default function StepSuccess() {
  return (
    <Box
      display={"flex"}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      textAlign={'center'} mt={5} gap={2}>
      <CheckCircle sx={{fontSize: 60, color: 'green'}}/>
      <Typography variant={'h5'} fontWeight={'bold'}>
        Registration Successful!
      </Typography>
      <Typography variant={'body1'} maxWidth={400}>
        Thanks you for registration. Your information has been successfully submitted.
      </Typography>
    </Box>
  )
}