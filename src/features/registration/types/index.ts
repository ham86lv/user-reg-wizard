import * as yup from "yup";
import {DefaultValues} from "react-hook-form";

// FieldConfig type represents the configuration for each individual field in the form.
// T is a generic type that allows for flexibility in different forms. It has the following properties:
// - name: The key of the object representing the field's name (e.g., 'firstName', 'email', etc.)
// - label: The human-readable label displayed for the field
// - type: Optional field type (e.g., 'text', 'password', etc.)
// - gridSize: Optional property to define how much space the field should take in a grid layout
export type FieldConfig<T> = {
  name: keyof T;
  label: string;
  type?: string;
  gridSize?: number;
};

// GenericFormStepProps type represents the props for each step of a multistep form.
// This is a generic type that can be used for any form, and it expects the following properties:
// - schema: A yup schema used for validation of the form's data
// - defaultValues: The default values to initialize the form, used with React Hook Form
// - fields: An array of FieldConfig objects which defines the fields for this form step
// - onNext: A callback function to be executed when moving to the next step, passing the form data
// - onBack: An optional callback function to be executed when navigating back to the previous step
export type GenericFormStepProps<T> = {
  schema: yup.ObjectSchema<any>;
  defaultValues: DefaultValues<T>;
  fields: FieldConfig<T>[];
  onNext: (data: T) => void;
  onBack?: () => void;
};
