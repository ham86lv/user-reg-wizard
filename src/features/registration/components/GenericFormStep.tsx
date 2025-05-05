import React from 'react';
import {Box, Button, Grid, TextField} from '@mui/material';
import {Path, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {GenericFormStepProps} from "../types";

export function GenericFormStep<T extends Record<string, any>>({
                                                                 schema,
                                                                 defaultValues,
                                                                 fields,
                                                                 onNext,
                                                                 onBack,
                                                               }: GenericFormStepProps<T>) {
  // Use react-hook-form to handle form state, validation, and submission
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema), // Validate using yup schema
  });

  // Function to handle form submission and move to the next step
  function onSubmit(data: T): void {
    onNext(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {fields.map(({name, label, type = 'text', gridSize = 6}) => (
          <Grid size={gridSize} key={String(name)}>
            <TextField
              fullWidth
              type={type}
              label={label}
              {...register(name as Path<T>)} // Connect the field to react-hook-form
              error={!!errors[name]}                        // Display error if validation fails
              helperText={errors[name]?.message as string}  // Show error message
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="space-between" mt={2}>
        {onBack && (
          <Button onClick={onBack} variant="outlined" size="large">
            Back
          </Button>
        )}
        <Button type="submit" variant="contained" size="large">
          Next
        </Button>
      </Box>
    </form>
  );
}
