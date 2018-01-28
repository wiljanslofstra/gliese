import 'modernizr';
import '../bootstrap';

import Accessibility from '../modules/accessibility';
import Tracking from '../modules/tracking';
import FormValidation from '../modules/formValidation';
// insert-import

const general = () => {
  window.App.tracking = new Tracking(window.App);
  window.App.accessibility = new Accessibility(window.App);
  window.App.formValidation = new FormValidation();
  // insert-definition
};

export default general;
