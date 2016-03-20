__webpack_public_path__ = window.WEBPACK_PATH; // eslint-disable-line

import 'modernizr';
import 'polyfills/dataset';
import 'polyfills/classList';

import accessibility from './modules/accessibility';
import helloModule from './modules/helloModule';

const modules = [
  accessibility,
  helloModule,
];

modules.forEach((module) => {
  module.initialize();
});
