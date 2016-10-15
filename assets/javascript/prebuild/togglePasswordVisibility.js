// Selector for the trigger elements
const TRIGGER_CLASS = '.js-password-toggle';

// The input type before toggling
const BASIC_TYPE = 'password';

// Toggle input elements to this type
const OTHER_TYPE = 'text';

// Add this class when the password is visible
const BTN_VISIBLE_CLASS = 'is-visible';

// Show password trigger elements
const toggles = document.querySelectorAll(TRIGGER_CLASS);
const togglesArr = Array.prototype.slice.call(toggles);

/**
 * Toggle the password visibility by changing the input type
 * @param  {String} newType The type to toggle to
 * @param  {Node}   input   Password input field
 * @return {Void}
 */
function togglePasswordVisibility(newType, input) {
  input.setAttribute('type', newType);
}

/**
 * Toggle the class on the toggle button
 * @param  {String} newType The type to toggle to
 * @param  {Node}   btn     Toggle button element
 * @return {Void}
 */
function toggleButtonClass(newType, btn) {
  if (newType === BASIC_TYPE) {
    btn.classList.remove(BTN_VISIBLE_CLASS);
  } else {
    btn.classList.add(BTN_VISIBLE_CLASS);
  }
}

/**
 * Create password toggle functionality
 * @param  {Node}   toggleEl Button element that will toggle the password field
 * @return {Void}
 */
function createPasswordToggle(toggleEl) {
  toggleEl.addEventListener('click', (e) => {
    e.preventDefault();

    // Get a reference to the clicked element
    const btn = e.target;

    // Password input element to toggle
    const input = document.querySelector(btn.getAttribute('href'));

    // Get the current input type
    const type = input.getAttribute('type');

    // Get the next type (after toggling)
    const newType = (type === BASIC_TYPE) ? OTHER_TYPE : BASIC_TYPE;

    // Toggle the password input field
    togglePasswordVisibility(newType, input);

    // Toggle the trigger class
    toggleButtonClass(newType, btn);
  });
}

export default () => {
  if (!togglesArr.length) {
    return;
  }

  togglesArr.forEach(createPasswordToggle);
};
