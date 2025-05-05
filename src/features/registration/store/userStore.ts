import {create} from "zustand";
import {wizardSteps} from "../config";
import {UserData, UserState} from "../interfaces";

/**
 * Initial state for the user data. This represents the default values
 * for all fields that will be collected during the multistep form process.
 */
const initialState: UserData = {
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  userName: '',
  password: ''
};

/**
 * Zustand store to manage the user data, form steps, and state transitions.
 * - currentStep: Tracks the current step in the form.
 * - wizardSteps: List of steps in the registration process.
 * - userData: Holds the current values for the user data fields.
 * - nextStep: Advances the user to the next step in the form.
 * - prevStep: Moves the user back to the previous step in the form.
 * - updateField: Updates the value of a specific field in the user data.
 * - reset: Resets the store to the initial state.
 */
export const useUserStore = create<UserState>((set, get) => ({
  /** Current step of the wizard (form progression) */
  currentStep: 0,

  /** List of wizard steps */
  wizardSteps: wizardSteps,

  /** User data state (holds all fields for user details) */
  userData: initialState,

  /**
   * Move to the next step in the form.
   * Increases the currentStep state by 1.
   */
  nextStep: (): void => {
    set({currentStep: get().currentStep + 1});
  },

  /**
   * Move to the previous step in the form.
   * Decreases the currentStep state by 1.
   */
  prevStep: (): void => {
    set({currentStep: get().currentStep - 1});
  },

  /**
   * Update a specific field in the userData state.
   * Uses the field name (keyof UserData) and its new value.
   */
  updateField: (field: keyof UserData, value: string): void => {
    set({userData: {...get().userData, [field]: value}});
  },

  /**
   * Reset the form state to the initial values.
   * Resets currentStep to 0 and userData to its default values.
   */
  reset: (): void => {
    set({currentStep: 0, userData: initialState});
  }
}));
