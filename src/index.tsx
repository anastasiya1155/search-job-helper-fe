import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.register();
