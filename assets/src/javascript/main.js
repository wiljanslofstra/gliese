/* global POLYFILLS_PATH */

__webpack_public_path__ = window.WEBPACK_PATH; // eslint-disable-line

/* eslint-disable */
import 'modernizr';
import './bootstrap';

const loadPolyfills = (
  !Modernizr.requestanimationframe ||
  !window.Promise ||
  typeof Object.assign !== 'function'
);

import accessibility from './modules/accessibility';
import whatsapp from './modules/whatsapp';
import parsleyFormValidation from './modules/parsleyFormValidation';
import tracking from './modules/tracking';
import embedWrap from './modules/embedWrap';
import navigation from './modules/navigation';
import generalSlider from './modules/generalSlider';
// import videoElement from './modules/videoElement';
// import datepicker from './modules/datepicker';
// import autocomplete from './modules/autocomplete';
// import filter from './modules/filter/filter';
// import pushNotifications from './modules/pushNotifications';
// import cart from './modules/cart';
// import map from './modules/maps/map';
// import addressAutofill from './modules/addressAutofill';
// import jumpToElement from './modules/jumpToElement';
// import togglePasswordVisibility from './modules/togglePasswordVisibility';
// import accordion from './modules/accordion';
// import uploadField from './modules/uploadField';
/* eslint-enable */

const app = () => {
  accessibility.initialize();
  tracking.initialize();
  parsleyFormValidation.initialize();
  navigation.initialize();
  generalSlider.initialize();
  embedWrap();
  whatsapp.initialize();
  // datepicker.initialize();
  // map.initialize();
  // videoElement.initialize();
  // autocomplete.initialize();
  // filter.initialize();
  // pushNotifications.initialize();
  // cart.initialize();
  // addressAutofill();
  // jumpToElement.initialize();
  // togglePasswordVisibility();
  // accordion.initialize();
  // uploadField.initialize();
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
  loadScript(POLYFILLS_PATH, app);
} else {
  app();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${BASE}/service-worker.js`);
}
