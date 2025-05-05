import React from 'react'
import {createRoot} from 'react-dom/client';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from './theme'
import App from './App'

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
)
