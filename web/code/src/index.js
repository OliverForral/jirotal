import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './ConfigureStore';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from './Components/AppContainer';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
