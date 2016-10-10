import { each } from 'lodash';
import config from './config';

function setSorting(val) {
  const sorting = document.querySelector(config.SORT_SELECTOR);
  sorting.value = val;
}

function setCheckboxes(group, val) {
  val.forEach((option) => {
    const input = group.querySelector(`[name="${option}"]`);

    if (input) {
      input.checked = true;
    }
  });
}

function setInputValue(el, val) {
  const element = el;
  element.value = val;
}

function setChildInputValues(group, obj) {
  each(obj, (val, key) => {
    const inputEl = group.querySelector(`[name="${key}"]`);

    if (inputEl) {
      inputEl.value = val;
    }
  });
}

export default (el, options) => {
  each(options, (optionVal, optionKey) => {
    const groupForKey = document.querySelector(
      config.GROUP_SELECTOR_WITH_PLACEHOLDER.replace('%s', optionKey)
    );

    // Sorting is handled seperately
    if (optionKey === 'sorting') {
      return setSorting(optionVal);
    }

    // If it's an array, we're probably setting checkboxes
    if (Array.isArray(optionVal)) {
      return setCheckboxes(groupForKey, optionVal);
    }

    // If it's a string it's probably a input field itself
    if (typeof optionVal === 'string') {
      return setInputValue(groupForKey, optionVal);
    }

    // We're left with an object, this will set all values on the child elements
    return setChildInputValues(groupForKey, optionVal);
  });
};
