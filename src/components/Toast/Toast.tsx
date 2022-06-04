import React, { FunctionComponent } from 'react';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import Alert, { AlertColor } from '@mui/material/Alert';
import { SnackbarOrigin } from '@mui/material/Snackbar';

interface ToastProps {
  isOpen: boolean;
  title: string;
  message: string;
  severity: AlertColor;
}

const Toast: FunctionComponent<ToastProps> = ({ isOpen, title, message, severity }) => {
  const position: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'center'
  };

  return (
    <Snackbar open={isOpen} anchorOrigin={position}>
      <Alert variant="filled" severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast;
