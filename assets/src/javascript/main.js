__webpack_public_path__ = window.WEBPACK_PATH; // eslint-disable-line

/* eslint-disable */
import 'modernizr';
console.log('test');

// global.Tether = require('tether');
// require('bootstrap');

const loadPolyfills = (
  !Modernizr.dataset ||
  !Modernizr.classlist ||
  !Modernizr.requestanimationframe ||
  !window.Promise ||
  typeof Object.assign !== 'function'
);

import accessibility from './modules/accessibility';
import disableWhatsapp from './modules/disableWhatsapp';
import parsleyFormValidation from './modules/parsleyFormValidation';
import tracking from './modules/tracking';
import videoElement from './modules/videoElement';
import embedWrap from './modules/embedWrap';
import navigation from './modules/navigation';
import datepicker from './modules/datepicker';
import generalSlider from './modules/generalSlider';
import autocomplete from './modules/autocomplete';
import filter from './modules/filter/filter';
import pushNotifications from './modules/pushNotifications';
import cart from './modules/cart';
import passwordStrength from './modules/passwordStrength';
import map from './modules/maps/map';
import addressAutofill from './modules/addressAutofill';
import jumpToElement from './modules/jumpToElement';
import togglePasswordVisibility from './modules/togglePasswordVisibility';
import accordion from './modules/accordion';
import uploadField from './modules/uploadField';
/* eslint-enable */

const app = () => {
  embedWrap();
  map.initialize();
  accessibility.initialize();
  datepicker.initialize();
  tracking.initialize();
  videoElement.initialize();
  parsleyFormValidation.initialize();
  navigation.initialize();
  generalSlider.initialize();
  autocomplete.initialize();
  filter.initialize();
  pushNotifications.initialize();
  cart.initialize();
  passwordStrength();
  addressAutofill();
  jumpToElement.initialize();
  togglePasswordVisibility();
  accordion.initialize();
  uploadField.initialize();
};

function loadScript(src, done) {
  const js = document.createElement('script');
  js.src = src;
  js.onload = done;

  js.onerror = () => {
    done(new Error(`Failed to load script ${src}`));
  };

  document.head.appendChild(js);
}

if (loadPolyfills) {
  loadScript(`${BASE}/assets/dist/javascript/polyfills.js`, app);
} else {
  app();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${BASE}/service-worker.js`);
}
