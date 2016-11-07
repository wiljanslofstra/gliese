__webpack_public_path__ = window.WEBPACK_PATH; // eslint-disable-line

/* eslint-disable */
import 'modernizr';

import '../sass/main.scss';

import './polyfills/objectAssign';
// import 'es6-promise';
// import 'whatwg-fetch';
import accessibility from './modules/accessibility';

let loadPolyfills = false;

if (!Modernizr.dataset || !Modernizr.classlist || !Modernizr.requestanimationframe) {
  loadPolyfills = true;
}

import datepicker from './prebuild/datepicker';
import disableWhatsapp from './prebuild/disableWhatsapp';
import formValidation from './prebuild/formValidation';
import tracking from './prebuild/tracking';
import videoElement from './prebuild/videoElement';
import embedWrap from './prebuild/embedWrap';
import passwordStrength from './prebuild/passwordStrength';
import map from './prebuild/map';
import addressAutofill from './prebuild/addressAutofill';
import jumpToElement from './prebuild/jumpToElement';
import togglePasswordVisibility from './prebuild/togglePasswordVisibility';
/* eslint-enable */

const app = () => {
  embedWrap();
  map();
  accessibility.initialize();
  datepicker.initialize();
  tracking.initialize();
  videoElement.initialize();
  passwordStrength();
  addressAutofill();
  jumpToElement.initialize();
  togglePasswordVisibility();
};

if (loadPolyfills) {
  /* eslint-disable */
  require([
    './polyfills/dataset',
    './polyfills/classList',
    './polyfills/requestAnimationFrame',
  ], () => {
    app();
  });
  /* eslint-enable */
} else {
  app();
}
