/* global POLYFILLS_PATH */

// import 'whatwg-fetch';
import loadScript from './helpers/loadScript';
import shouldLoadPolyfills from './helpers/shouldLoadPolyfills';
import './helpers/requestIdleCallback';
import general from './containers/general';

Number.isNaN = Number.isNaN || function isNaNPolyfill(value) {
  return value !== value; // eslint-disable-line no-self-compare
};

// Make sure these global variables exist
['App', 'POLYFILLS_PATH'].forEach((gl) => {
  if (typeof window[gl] === 'undefined') {
    throw new Error(`${gl} is not defined`);
  }
});

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
