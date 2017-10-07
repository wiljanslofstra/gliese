let $form = $('.js-form');
let parsleyLoaded = false;

const formValidation = {
  /**
   * Initialize form validation for form elements on the page
   * @return {void}
   */
  initialize() {
    if ($form.length) {
      this.loadParsley(() => {
        this.createFormValidation();
        this.createFormTracking();
      });
    }

    // Reinitialize form validation for newly added forms
    $(document).on('form:reinit', () => {
      $form = $('.js-form');

      this.loadParsley(() => {
        this.createFormValidation();
      });
    });
  },

  /**
   * Asynchronously load Parsley, if it's already loaded it will callback immediately
   * @param  {function} cb - Callback for when Parsley is loaded
   * @return {void}
   */
  loadParsley(cb) {
    if (parsleyLoaded) {
      cb.call(this);
      return;
    }

    require.ensure([], (require) => {
      require('../formValidation');
      parsleyLoaded = true;
      cb.call(this);
    });
  },

  /**
   * Create form validation
   * @return {void}
   */
  createFormValidation() {
    $form.each((i, form) => {
      $(form).parsley({
        classHandler(el) {
          // Add classes to the form-group
          return el.$element.closest('.form-group');
        },
      });
    });
  },

  /**
   * Get the name of a form or fallback to page path
   * @param {object} e Event object from Parsley callbacks
   * @return {string} Name of the form (or location)
   */
  getFormName(e) {
    return e.$element.data('name') || `Form on: ${window.location.pathname}`;
  },

  /**
   * Track forms for success and errors
   * @return {void}
   */
  createFormTracking() {
    // Remove all callbacks to prevent multiple callbacks
    window.Parsley.off('form:error');
    window.Parsley.off('form:success');

    // Listen for form success events
    window.Parsley.on('form:success', (e) => {
      this.gaEvent('Submit', this.getFormName(e));
    });

    // Listen for form error events
    window.Parsley.on('form:error', (e) => {
      this.gaEvent('Error', this.getFormName(e));
    });
  },

  /**
   * Send event to Analytics
   * @param  {string} action - Action of the form that is being performed (e.g. error or success)
   * @param  {string} name - Name of the form, can be used to easily
   *                       track which forms are used in Analytics
   * @return {void}
   */
  gaEvent(action, name) {
    let formName = 'untitled';

    if (typeof name !== 'undefined') {
      formName = name;
    }

    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: 'Form',
        event_label: formName,
      });
    }
  },
};

export default formValidation;
