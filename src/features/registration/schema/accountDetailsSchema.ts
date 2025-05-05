import * as yup from "yup";

/**
 * Schema to validate the account details form (username and password).
 * Ensures that the username is provided and the password meets various complexity requirements.
 */
export const accountDetailsSchema = yup.object({
  /** Username field - required */
  userName: yup.string().required('Username is required'),

  /** Password field - required with specific complexity rules */
  password: yup.string()
    .required('Password is required') // Password is required
    .min(8, 'Password must be at least 8 characters long')        // Minimum length of 8 characters
    .matches(/[a-z]/, 'Must include a lowercase letter')         // Must contain at least one lowercase letter
    .matches(/[A-Z]/, 'Must include an uppercase letter')        // Must contain at least one uppercase letter
    .matches(/\d/, 'Must include a number')                      // Must contain at least one number
    .matches(/[^a-zA-Z0-9]/, 'Must include a special character') // Must contain at least one special character
}).required();

/**
 * Type derived from the validation schema using yup's InferType utility.
 * This represents the shape of data expected in the account details form.
 */
export type AccountDetailsFormData = yup.InferType<typeof accountDetailsSchema>;
