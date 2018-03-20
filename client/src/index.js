import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(

  <MuiThemeProvider>
    <Provider store={store}>
  <App />
  </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
unregisterServiceWorker();
