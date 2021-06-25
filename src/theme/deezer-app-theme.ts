import { createMuiTheme } from '@material-ui/core';

export const deezerAppTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#0033A1',
      main: '#0033A1',
      dark: '#0033A1',
      contrastText: '#fff'
    },
    secondary: {
      light: '#00A1E0',
      main: '#00A1E0',
      dark: '#00A1E0',
      contrastText: '#000'
    },
    error: {
      light: '#DE3831',
      main: '#DE3831',
      dark: '#DE3831',
      contrastText: '#000'
    },
    warning: {
      light: '#FF681D',
      main: '#FF681D',
      dark: '#FF681D',
      contrastText: '#000'
    },
    info: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#000'
    },
    success: {
      light: '#00AD6C',
      main: '#00AD6C',
      dark: '#00AD6C',
      contrastText: '#000'
    }
  },

  typography: {
    fontFamily: ['Benton Sans', 'Roboto'].join(',')
  }
});
