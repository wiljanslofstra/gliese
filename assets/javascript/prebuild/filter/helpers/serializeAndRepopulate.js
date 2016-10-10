/**
 * Serialize input fields to an object
 * @param  {Array}  els Array with input element
 * @return {Object}     Serialized data object
 */
function serializeInput(els) {
  // return all data
  const responseData = {};

  els.forEach((el) => {
    const inputType = el.type;
    const isInputField = /select|textarea/i.test(el.nodeName)
      || /text|hidden|password/i.test(inputType);
    const isCheckbox = el.checked;

    if (el.name && !el.disabled && (isCheckbox || isInputField)) {
      // Ignore input elements where the value is empty
      if (el.value === '') {
        return;
      }

      // Handle checkboxes/radio buttons by putting them in an array
      if (isCheckbox) {
        // Check if there's already an array to hold the checkbox/radio values
        if (typeof responseData[el.name] === 'undefined') {
          responseData[el.name] = [];
        }

        // Push the checkbox/radio value in the array
        responseData[el.name].push(el.value);

      // Handle input/select/textarea fields
      } else {
        responseData[el.name] = el.value;
      }
    }
  });

  return responseData;
}

/**
 * Populate input fields with the given object
 * @param  {Array}  els  Input elements
 * @param  {Object} data Object with all data to populate the input fields with
 * @return {Void}
 */
function populateForm(els, data) {
  els.forEach((el) => {
    const elInst = el;

    // Ignore if there's no name attribute or the data doesn't exist
    if (!el.name || !data[el.name]) {
      return;
    }

    // Handle checkbox and radio buttons
    if (el.type === 'checkbox' || el.type === 'radio') {
      const valArray = data[el.name];
      const isChecked = (valArray.indexOf(el.value) >= 0);
      elInst.checked = isChecked;

    // Handle other input fields
    } else {
      elInst.value = data[el.name];
    }
  });
}

/**
 * Serializes and repopulates form inputs
 * Stolen but modified from: http://stackoverflow.com/a/1490431/1653079
 * @param  {Node}   ref  Element to search for input elements in
 * @param  {Object} data If included, will populate all child controls.
 * @return {Object}      Object with values, or empty if repopulating
 */
export default (ref, data) => {
  // Get all input elements
  let els = ref.querySelectorAll('input, select, textarea');
  els = Array.prototype.slice.call(els);

  if (typeof data !== 'object') {
    return serializeInput(els);
  }

  populateForm(els, data);

  return {};
};
