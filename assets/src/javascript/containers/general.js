import 'modernizr';
import '../bootstrap';

import Accessibility from '../modules/accessibility';
import Tracking from '../modules/tracking';
import FormValidation from '../modules/formValidation';
// insert-import

const general = () => {
  const app = window.App;

  app.accessibility = new Accessibility(app);
  app.tracking = new Tracking(app);
  app.formValidation = new FormValidation();
  // insert-definition
};

export default general;
