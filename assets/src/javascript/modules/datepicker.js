import $ from 'jquery';
import nl from '../language/nl';

// Datepicker elements
const $date = $('.js-datepicker');

const datePicker = {
  /**
   * Initialize datepicker module, first check if datepickers are found on the page
   * @return {void}
   */
  initialize() {
    if ($date.length) {
      this.loadDatepicker(() => {
        this.createPickers();
      });
    }
  },

  /**
   * Load the Bootstrap-datepicker plugin
   * @param  {function} cb - Callback for when the plugin is loaded
   * @return {void}
   */
  loadDatepicker(cb) {
    require(['bootstrap-datepicker'], () => { // eslint-disable-line
      cb.call(this);
    });
  },

  /**
   * Initialize datepickers
   * @return {void}
   */
  createPickers() {
    $.fn.datepicker.dates.nl = nl.datepicker;

    $date.datepicker({
      format: 'dd-mm-yyyy',
      language: 'nl',
      startDate: new Date(),
    });
  },
};

export default datePicker;
