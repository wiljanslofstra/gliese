/* global BASE */

__webpack_public_path__ = window.WEBPACK_PATH; // eslint-disable-line

/* eslint-disable */
import 'modernizr';
import accessibility from './modules/accessibility';

// global.Tether = require('tether');
// require('bootstrap');

const loadPolyfills = (
  !Modernizr.dataset ||
  !Modernizr.classlist ||
  !Modernizr.requestanimationframe ||
  !window.Promise ||
  typeof Object.assign !== 'function'
);

// import datepicker from './prebuild/datepicker';
import disableWhatsapp from './prebuild/disableWhatsapp';
import parsleyFormValidation from './prebuild/parsleyFormValidation';
import tracking from './prebuild/tracking';
import videoElement from './prebuild/videoElement';
import embedWrap from './prebuild/embedWrap';
import navigation from './prebuild/navigation';
import datepicker from './prebuild/datepicker';
import generalSlider from './prebuild/generalSlider';
import autocomplete from './prebuild/autocomplete';
import filter from './prebuild/filter';
import pushNotifications from './prebuild/pushNotifications';
// import passwordStrength from './prebuild/passwordStrength';
import map from './prebuild/map';
// import addressAutofill from './prebuild/addressAutofill';
// import jumpToElement from './prebuild/jumpToElement';
// import togglePasswordVisibility from './prebuild/togglePasswordVisibility';
/* eslint-enable */

const app = () => {
  embedWrap();
  map();
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
  // passwordStrength();
  // addressAutofill();
  // jumpToElement.initialize();
  // togglePasswordVisibility();
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
  loadScript(`${BASE}/assets/build/polyfills.js`, app);
} else {
  app();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${BASE}/service-worker.js`);
}
