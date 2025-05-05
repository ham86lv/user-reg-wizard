import {createTheme, Theme} from '@mui/material/styles';

// Create a custom Material-UI theme using the `createTheme` function.
// The `theme` object allows you to customize various design aspects of the UI components.

export const theme: Theme = createTheme({
  // Define the color palette of the theme.
  // 'mode' defines the light or dark theme.
  palette: {
    mode: 'light', // Use light mode for the theme
    primary: {main: '#007bff'}, // Set the primary color to blue (#007bff)
    secondary: {main: '#6f42c1'}, // Set the secondary color to purple (#6f42c1)
  },
  // Define the shape of the UI components, such as buttons, input fields, etc.
  // Here, the border radius is set to 12px for rounded corners.
  shape: {
    borderRadius: 12,
  },
});
