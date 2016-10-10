import $ from 'jquery';

const groupElements = document.querySelectorAll('[data-autofill-group]');
const groupElementsArr = Array.prototype.slice.call(groupElements);

/**
 * Fetch the address from the API
 * @param  {String} postal  Postal (e.g. 1234AB)
 * @param  {String} country Country abbreviation (e.g. nl)
 * @return {Promise}        jQuery promise from the ajax request
 */
function fetchAddress(postal, country) {
  $.support.cors = true;

  return $.ajax({
    url: `api/?zipcode=${postal}&country=${country}`,
    type: 'GET',
    dataType: 'json',
    error: (err) => {
      console.log(err); // eslint-disable-line
    },
  });
}

const addressAutofill = {
  /**
   * Initialize the events and variables
   * @param  {String} group Name of the current group
   * @return {Void}
   */
  initialize(group) {
    this.group = group;

    // Get all elements in this group
    this.autofillPostal = this.getElementForGroup('.js-autofill-postal');
    this.autofillStreet = this.getElementForGroup('.js-autofill-street');
    this.autofillCity = this.getElementForGroup('.js-autofill-city');
    this.autofillCountry = this.getElementForGroup('.js-autofill-country');

    // Listen for changes to the postal fields
    this.autofillPostal.addEventListener('keyup', () => {
      this.runCheck();
    });

    this.autofillCountry.addEventListener('change', () => {
      this.runCheck();
    });
  },

  /**
   * Get element from the same group with a classname
   * @param  {String} cls Class name to get the element for
   * @return {Node}       Element
   */
  getElementForGroup(cls) {
    return document.querySelector(`${cls}[data-autofill-group="${this.group}"]`);
  },

  /**
   * Small wrapper around the API call, this will handle errors and loading states
   * @return {Void}
   */
  runCheck() {
    const postal = this.autofillPostal.value.trim().replace(' ', '');
    const country = this.autofillCountry.value;

    // Only if the postal code seems valid, we run the check
    if (postal.length !== 6 || country === '') {
      return;
    }

    this.autofillPostal.classList.add('is-loading');

    fetchAddress(postal, country)
      .done((raw) => {
        if (raw.status === 'ok') {
          this.outputData(raw.data);
          this.autofillPostal.classList.remove('is-loading');
        }
      });
  },

  /**
   * Output data to the DOM, but only if the input fields are still empty
   * @param  {Object} data API object with all address information
   * @return {Void}
   */
  outputData(data) {
    if (this.autofillStreet.value === '') {
      this.autofillStreet.value = data.street;
    }

    if (this.autofillCity.value === '') {
      this.autofillCity.value = data.city;
    }
  },
};

export default () => {
  const groups = [];

  // We can create multiple groups of fields. For example a invoice and delivery autofill
  groupElementsArr.forEach((el) => {
    const group = el.dataset.autofillGroup;

    if (groups.indexOf(group) < 0) {
      groups.push(group);
    }
  });

  // Create a single instance of addressAutofill for each group
  groups.forEach((group) => {
    Object.assign({}, addressAutofill).initialize(group);
  });
};
