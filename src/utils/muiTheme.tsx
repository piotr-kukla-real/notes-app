import { createTheme } from '@material-ui/core';

const muiTheme = createTheme({
  props: {
    MuiTextField: {
      variant: 'outlined',
      color: 'secondary',
      size: 'small',
    },
    MuiFab: {
      color: 'secondary',
      size: 'medium',
    },
  },
  palette: {
    primary: {
      main: 'hsl(127, 59%, 53%)',
    },
    secondary: {
      main: 'hsl(202, 100%, 50%)',
    },
    error: {
      main: 'hsl(4, 74%, 55%)',
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 600,
      lg: 768,
      xl: 960,
    },
  },
});

export default muiTheme;
