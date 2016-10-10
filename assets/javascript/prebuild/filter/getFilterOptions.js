import config from './config';

/**
 * Get the value from the input field. If it's a checkbox or radio button we'll
 * use 'checked' to get the value
 * @param  {Node}   inputEl Input element
 * @return {String}         Input value
 */
function getValue(inputEl) {
  const inputType = inputEl.type;

  if (inputType === 'checkbox' || inputType === 'radio') {
    return (inputEl.checked) ? inputEl.value : false;
  }

  return inputEl.value;
}

/**
 * Get all input values for a filter group
 * @param  {Node}   group Group element
 * @return {Object}       Values for the current group as an object
 */
function getValuesForGroup(group) {
  const input = group.querySelectorAll('input, select');
  const inputArr = Array.prototype.slice.call(input);
  const groupOptions = {};

  // Loop through all input fields
  inputArr.forEach((inputEl) => {
    const name = inputEl.getAttribute('name');
    const val = getValue(inputEl);

    // Only save the key and value if a value is defined
    if (val) {
      groupOptions[name] = val;
    }
  });

  return groupOptions;
}

/**
 * Get value of the sorting select
 * @param  {Node}   el Filter wrapper element
 * @return {String}    Sorting
 */
function getSorting(el) {
  const sortingEl = el.querySelector(config.SORT_SELECTOR);
  return (sortingEl) ? sortingEl.value : '';
}

/**
 * Get all filter input values
 * @param  {Node}     el Filter element
 * @param  {Function} cb Callback for when the filters are retrieved from the DOM
 * @return {Void}
 */
export default (el, cb) => {
  const groups = el.querySelectorAll(config.GROUP_SELECTOR);
  const groupsArr = Array.prototype.slice.call(groups);

  const options = {};

  // Loop through groups
  groupsArr.forEach((group) => {
    const groupName = group.dataset.filterGroup;
    const groupType = group.dataset.filterType;
    const nodeName = group.nodeName;

    // If the group is a input field, we immediately return the value
    if (nodeName === 'SELECT' || nodeName === 'INPUT') {
      const val = getValue(group);

      if (val) {
        options[groupName] = val;
      }

      return;
    }

    // Get all input values for the current group
    options[groupName] = getValuesForGroup(group);

    // If the type is checkboxes, we turn the object in an array
    // e.g. { 'option-1': 'on', 'option-2': 'on' } will become ['option-1', 'option-2']
    if (groupType === 'checkboxes') {
      const keys = Object.keys(options[groupName]);
      if (keys.length) {
        options[groupName] = keys;
      } else {
        delete options[groupName];
      }
    }
  });

  // Return the filter sorting
  options.sorting = getSorting(el);

  cb(options);
};
