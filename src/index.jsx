import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { store, history } from './store/configureStore';
import Routes from './routes';
import App from './components/App';

ReactDom.render(
  <Provider store={store}>
    <App>
      <ConnectedRouter  style={{height: '100%'}} history={history}>
        <Routes />
      </ConnectedRouter>
    </App>
  </Provider>,
  document.getElementById('app'),
);
