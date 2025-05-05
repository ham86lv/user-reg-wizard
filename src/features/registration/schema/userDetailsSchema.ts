import * as yup from "yup";

/**
 * Schema to validate the user details form (first name, last name, email).
 * Ensures that each field is required and that the email is valid.
 */
export const userDetailsSchema = yup.object({
  /** First name field - required */
  firstName: yup.string().required('First name is required'),

  /** Last name field - required */
  lastName: yup.string().required('Last name is required'),

  /** Email field - required and must be a valid email format */
  email: yup.string()
    .email('Invalid email')     // Validates that the email is in the correct format
    .required('Email is required') // Email is required
}).required();

/**
 * Type derived from the validation schema using yup's InferType utility.
 * This represents the shape of data expected in the user details form.
 */
export type UserDetailsFormData = yup.InferType<typeof userDetailsSchema>;
