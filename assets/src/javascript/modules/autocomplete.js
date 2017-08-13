/* eslint-disable */
import Awesomplete from 'awesomplete';
import { template } from 'lodash';
import normalizeForSearch from 'normalize-for-search';
/* eslint-enable */

const $autocomplete = $('.js-autocomplete');

const autocomplete = {

  /**
   * Initialize the autocomplete on a single input field
   * @param {Node} el DOM element of the input field
   * @return {Void}
   */
  initialize(el) {
    this.$el = $(el);
    this.data = this.$el.data();

    // Get the referenced template and compile it for later
    this.template = template($(this.data.autoTemplate).html());

    // Create the Awesomplete instance
    this.awesomplete = new Awesomplete(el, {
      list: [],
      filter: this.filter.bind(this),
      item: this.item.bind(this),
      replace: this.replace.bind(this),
    });

    // Create necessary events for handling API request etc.
    this.createEvents();
  },

  /**
   * Create events for example when the input changes
   * @return {Void}
   */
  createEvents() {
    // Listen for changes to the input
    this.$el.on('keyup', () => {
      const val = this.$el.val();
      const api = this.data.autoApiUrl;
      const fieldKey = this.data.autoApiKey;

      // Fetch a new list from the API
      $.ajax({
        url: api,
        data: {
          [fieldKey]: val,
        },
        success: this.outputList.bind(this),
      });
    });

    // Handles the select event, we can use this to prevent closing
    this.$el.on('awesomplete-select', (e) => {
      if (!this.data.autoCloseClick) {
        e.preventDefault();
      }
    });
  },

  /**
   * Set the fetch list on the Awesomplete instance
   * @param {String/Object} res Response from the API, either a object or a JSON string
   * @return {Void}
   */
  outputList(res) {
    let list = '';

    if (typeof res === 'string') {
      list = JSON.parse(res);

      if (typeof list === 'string') {
        throw new Error('List returned from the API is incorrect and couldn\'t be parsed');
      }
    } else {
      list = res;
    }

    // Set the new list
    this.awesomplete._list = list; // eslint-disable-line

    // Re-evaluate so that the new list is properly propagated
    this.awesomplete.evaluate();
  },

  /**
   * Handles the filtering of data, this could also return true to disable filtering
   * @param {Object} obj Object returned from the API
   * @param {String} input User input from the input field
   * @return {Boolean} If this item should be shown to the user
   */
  filter(obj, input) {
    const title = normalizeForSearch(obj.value.title);
    const newInput = normalizeForSearch(input);

    return title.indexOf(newInput) === 0;
  },

  /**
   * Render a single item in the Awesomplete dropdown
   * @param {Object} obj Object of the current item returned from the API
   * @return {Node} DOM node to render
   */
  item(obj) {
    return $(this.template(obj.value))[0];
  },

  /**
   * Handles the replacing of text in the input field when a item is selected
   * @param {Object} obj Object of the current item returned from the API
   * @return {Void}
   */
  replace(obj) {
    if (typeof obj.value.redirect_url !== 'undefined') {
      window.location = obj.value.redirect_url;
    }

    this.$el.val(obj.value.title);

    if (this.data.autoSubmitOnSelect) {
      this.$el.parents('form').submit();
    }
  },
};

const autocompletes = {
  initialize() {
    $autocomplete.each((i, el) => {
      const inst = Object.assign({}, autocomplete);
      inst.initialize(el);
    });
  },
};

export default autocompletes;
