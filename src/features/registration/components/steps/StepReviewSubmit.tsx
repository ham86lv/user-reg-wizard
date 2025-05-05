import React from "react";
import {useUserStore} from "../../store/userStore";
import {Box, Button, Grid, Typography} from "@mui/material";

export default function StepReviewSubmit() {
  const {userData, nextStep, prevStep} = useUserStore();

  // Function to handle confirm action and proceed to the next step
  function handleConfirm(): void {
    nextStep(); // Move to the next step
  }

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Grid container rowSpacing={2} columnSpacing={{xs: 2, sm: 2, md: 2}}>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>First Name</Typography>
          <Typography variant="body2">{userData.firstName}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>Last Name</Typography>
          <Typography variant="body2">{userData.lastName}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>Username</Typography>
          <Typography variant="body2">{userData.userName}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>Email</Typography>
          <Typography variant="body2">{userData.email}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>City</Typography>
          <Typography variant="body2">{userData.city}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>State</Typography>
          <Typography variant="body2">{userData.state}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>Street</Typography>
          <Typography variant="body2">{userData.street}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{fontWeight: 'bold'}}>Zip Code</Typography>
          <Typography variant="body2">{userData.zipCode}</Typography>
        </Grid>
      </Grid>
      <Box display={'flex'} justifyContent={'space-between'} mt={2}>
        <Button onClick={prevStep} variant={'outlined'} size={'large'}>Back</Button>
        <Button onClick={handleConfirm} variant={'contained'} size={'large'}>
          Confirm & Submit</Button>
      </Box>
    </Box>
  )
}
