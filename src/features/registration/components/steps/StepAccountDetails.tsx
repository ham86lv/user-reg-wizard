import React from 'react';
import {FieldConfig} from "../../types";
import {GenericFormStep} from "../GenericFormStep";
import {useUserStore} from "../../store/userStore";
import {AccountDetailsFormData, accountDetailsSchema} from "../../schema/accountDetailsSchema";

export default function StepAccountDetails() {
  const {userData, updateField, nextStep, prevStep} = useUserStore();

  // Default form values set from user data in the store
  const defaultValues: AccountDetailsFormData = {
    userName: userData.userName,
    password: userData.password,
  };

  // Configuration of fields for the account details form
  const fields: FieldConfig<AccountDetailsFormData>[] = [
    {name: "userName", label: "Username"},
    {name: "password", label: "Password", type: "password"},
  ];

  // Function to handle form submission and update user data
  function handleNext(data: AccountDetailsFormData): void {
    Object.entries(data).forEach(([field, value]: [string, string]): void => {
      updateField(field as keyof AccountDetailsFormData, value);
    });
    nextStep(); // Move to the next step
  }

  return (
    <GenericFormStep
      schema={accountDetailsSchema} // Validation schema
      defaultValues={defaultValues} // Default values
      fields={fields}               // Fields to render
      onNext={handleNext}           // Next step handler
      onBack={prevStep}             // Back step handler
    />
  );
}