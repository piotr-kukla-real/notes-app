import ReactDOM from 'react-dom';
import App from 'App';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import muiTheme from 'utils/muiTheme';
import GlobalStyle from 'style';
import { NotificationProvider } from 'components/NotificationProvider';
import { NotesProvider } from 'components/NotesProvider';

const root = document.getElementById('root');

ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={muiTheme}>
      <SCThemeProvider theme={muiTheme}>
        <NotificationProvider>
          <NotesProvider>
            <GlobalStyle />
            <App />
          </NotesProvider>
        </NotificationProvider>
      </SCThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>,
  root,
);
