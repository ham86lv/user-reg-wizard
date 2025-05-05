/**
 * Represents the user's personal and address information.
 */
export interface UserData {
  /** First name of the user */
  firstName: string;

  /** Last name of the user */
  lastName: string;

  /** Email address of the user */
  email: string;

  /** Street address of the user */
  street: string;

  /** City of residence for the user */
  city: string;

  /** State of residence for the user */
  state: string;

  /** Zip code of the user's address */
  zipCode: string;

  /** Username chosen by the user for their account */
  userName: string;

  /** Password chosen by the user for their account */
  password: string;
}

/**
 * Represents the state of the user registration process.
 */
export interface UserState {
  /** List of labels for each step in the wizard */
  wizardSteps: string[];

  /** The index of the current active step in the wizard */
  currentStep: number;

  /** Holds the user's data for all form steps */
  userData: UserData;

  /** Function to proceed to the next step in the wizard */
  nextStep: () => void;

  /** Function to go back to the previous step in the wizard */
  prevStep: () => void;

  /** Updates a specific field in the user's data */
  updateField: (field: keyof UserData, value: string) => void;

  /** Resets the form and user state */
  reset: () => void;
}
