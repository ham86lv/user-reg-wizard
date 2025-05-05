import React, {ReactNode, useEffect} from "react";
import {useUserStore} from "./userStore";

// Interface for the component props, expecting only the `children` property,
// which will contain the nested elements (ReactNode)
interface Props {
  children: ReactNode;
}

// The UserStoreProvider component is used to provide the initial state
// for the user store (Zustand store) within the app context.
// It is particularly used for resetting the store state in tests to ensure
// a clean and consistent environment for each test.
export function UserStoreProvider({children}: Props) {
  // Using useEffect to set the initial state of the store when the component is mounted
  useEffect(() => {
    useUserStore.setState({
      currentStep: 0, // The initial step of the registration wizard (0 - first step)
      userData: { // Initializing user data with empty values
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        userName: '',
        password: ''
      }
    });
  }, []); // Empty dependency array, so the effect runs only once when the component is mounted

  // Returning the children components wrapped in a Fragment
  return <>{children}</>;
}
