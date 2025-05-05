import React from 'react';
import {FieldConfig} from "../../types";
import {GenericFormStep} from "../GenericFormStep";
import {useUserStore} from "../../store/userStore";
import {AddressDetailsFormData, addressDetailsSchema} from '../../schema/addressDetailsSchema';

export default function StepAddressDetails() {
  const {userData, updateField, nextStep, prevStep} = useUserStore();

  // Default form values set from user data in the store
  const defaultValues: AddressDetailsFormData = {
    street: userData.street,
    city: userData.city,
    state: userData.state,
    zipCode: userData.zipCode,
  };

  // Configuration of fields for the address details form
  const fields: FieldConfig<AddressDetailsFormData>[] = [
    {name: "street", label: "Street"},
    {name: "city", label: "City"},
    {name: "state", label: "State"},
    {name: "zipCode", label: "Zip Code"},
  ];

  // Function to handle form submission and update user data
  function handleNext(data: AddressDetailsFormData): void {
    Object.entries(data).forEach(([field, value]: [string, string]): void => {
      updateField(field as keyof AddressDetailsFormData, value);
    });
    nextStep();
  }

  return (
    <GenericFormStep
      schema={addressDetailsSchema} // Validation schema
      defaultValues={defaultValues} // Default values
      fields={fields}               // Fields to render
      onNext={handleNext}           // Next step handler
      onBack={prevStep}             // Back step handler
    />
  );
}