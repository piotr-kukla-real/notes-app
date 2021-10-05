import ReactDOM from 'react-dom';
import App from 'App';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import muiTheme from 'utils/muiTheme';

const root = document.getElementById('root');

ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={muiTheme}>
      <SCThemeProvider theme={muiTheme}>
        <App />
      </SCThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>,
  root,
);
