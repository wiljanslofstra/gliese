__webpack_public_path__ = window.WEBPACK_PATH; // eslint-disable-line

import 'modernizr';
import 'polyfills/dataset';
import 'polyfills/classList';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

// Make this a pre-created element
const el = document.createElement('div');
el.id = 'root';
document.body.appendChild(el);

// Set status on landing screen
const status = document.querySelector('.js-status');
status.innerHTML = '👌 Javascript available';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
