import React from "react";
import {FieldConfig} from "../../types";
import {GenericFormStep} from "../GenericFormStep";
import {useUserStore} from "../../store/userStore";
import {UserDetailsFormData, userDetailsSchema} from "../../schema/userDetailsSchema";

export default function StepUserDetails() {
  const {userData, updateField, nextStep} = useUserStore();

  // Default form values from user data
  const defaultValues: UserDetailsFormData = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  };

  // Field configuration for user details
  const fields: FieldConfig<UserDetailsFormData>[] = [
    {name: "firstName", label: "First Name"},
    {name: "lastName", label: "Last Name"},
    {name: "email", label: "Email", type: "email", gridSize: 12},
  ];

  // Handle form submission
  function handleNext(data: UserDetailsFormData): void {
    Object.entries(data).forEach(([field, value]: [string, string]): void => {
      updateField(field as keyof UserDetailsFormData, value);
    });
    nextStep(); // Move to the next step
  }

  return (
    <GenericFormStep
      schema={userDetailsSchema}    // Validation schema
      defaultValues={defaultValues} // Default values
      fields={fields}               // Fields to render
      onNext={handleNext}           // Next step handler
    />
  )
}