/* global POLYFILLS_PATH */

import loadScript from './helpers/loadScript';
import shouldLoadPolyfills from './helpers/shouldLoadPolyfills';
import './helpers/requestIdleCallback';
import general from './containers/general';

// Make sure these global variables exist
['App', 'POLYFILLS_PATH', 'WEBPACK_PATH'].forEach((gl) => {
  if (typeof window[gl] === 'undefined') {
    throw new Error(`${gl} is not defined`);
  }
});

__webpack_public_path__ = window.WEBPACK_PATH; // eslint-disable-line

const ready = () => {
  general();
};

if (shouldLoadPolyfills()) {
  loadScript(POLYFILLS_PATH, ready);
} else {
  ready();
}

if ('serviceWorker' in navigator && window.isSecureContext !== false) {
  navigator.serviceWorker.register(`${BASE}/service-worker.js`);
}
