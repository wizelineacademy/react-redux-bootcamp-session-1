import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
