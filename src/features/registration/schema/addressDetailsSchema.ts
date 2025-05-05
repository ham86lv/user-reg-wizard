import * as yup from "yup";

/**
 * Schema to validate the address details form (street, city, state, zip code).
 * Ensures that each field is required and that the zip code matches a valid format.
 */
export const addressDetailsSchema = yup.object({
  /** Street field - required */
  street: yup.string().required('Street is required'),

  /** City field - required */
  city: yup.string().required('City is required'),

  /** State field - required */
  state: yup.string().required('State is required'),

  /** Zip code field - matches a valid US Zip Code format */
  zipCode: yup.string()
    .matches(/^\d{5}(-\d{4})?$/, 'Invalid Zip Code') // Matches a valid 5-digit or 9-digit Zip Code (e.g., 12345 or 12345-6789)
    .required('Zip Code is required')                         // Zip code is required
}).required();

/**
 * Type derived from the validation schema using yup's InferType utility.
 * This represents the shape of data expected in the address details form.
 */
export type AddressDetailsFormData = yup.InferType<typeof addressDetailsSchema>;
