import getPasswordStrength from '../helpers/getPasswordStrength';

// Wrapper around the password input field and the 'meter'
const WRAPPER_CLASS = '.js-password';

// Class to add when a password is really really bad
const WARNING_CLASS = 'has-warning';

// Class of the input element inside the wrapper
const INPUT_CLASS = '.js-password-input';

// Class of the meter element inside the wrapper
const METER_CLASS = '.js-password-meter';

// List of the ten most frequently used passwords
const FREQUENT_PASSWORDS = [
  '123456',
  'password',
  '12345678',
  'qwerty',
  '123456789',
  '12345',
  '1234',
  '111111',
  '1234567',
  'dragon',
];

// All password fields on the page
const inputs = document.querySelectorAll(WRAPPER_CLASS);
const inputsArr = Array.prototype.slice.call(inputs);

/**
 * Output the strength score to the DOM
 * @param  {Node}   el       Element to add the score to
 * @param  {Number} strength Strength score, -1 is empty, 0 is bad and 5 is best
 * @return {Void}
 */
function outputStrength(el, strength) {
  el.setAttribute('data-strength', strength);
}

/**
 * Check if the given password is one of the most frequently used
 * @param  {String}  val Password to check against the most frequently used
 * @return {Boolean}     Is it frequently used?
 */
function isFrequentlyUsed(val) {
  return FREQUENT_PASSWORDS.indexOf(val) >= 0;
}

/**
 * Outputs a warning text to the DOM, this is used to notify the user about the password
 * being really bad
 * @param  {Node}   passwordMeter Element to add the warning text to
 * @return {Void}
 */
function outputWarningText(passwordMeter) {
  const passwordMeterEl = passwordMeter;
  if (typeof passwordMeter.dataset.warningText !== 'undefined') {
    passwordMeterEl.innerHTML = passwordMeter.dataset.warningText;
  }
}

/**
 * Show the warning text
 * @param  {Node}   passwordMeter Element to show the message in
 * @return {Void}
 */
function showWarningText(passwordMeter) {
  passwordMeter.classList.add(WARNING_CLASS);
  outputWarningText(passwordMeter);
}

/**
 * Hide the warning text
 * @param  {Node}   passwordMeter Element to hide the message from
 * @return {Void}
 */
function hideWarningText(passwordMeter) {
  const passwordMeterEl = passwordMeter;
  passwordMeterEl.classList.remove(WARNING_CLASS);
  passwordMeterEl.innerHTML = '';
}

/**
 * Create a event listener on this password field wrapper
 * @param  {Node}   el Password element wrapper
 * @return {Void}
 */
function createListener(el) {
  const passwordInput = el.querySelector(INPUT_CLASS);
  const passwordMeter = el.querySelector(METER_CLASS);

  passwordInput.addEventListener('keyup', (e) => {
    const val = e.target.value;

    // Get the password strength
    // -1 is empty, 0 is bad, 5 is best
    let score = getPasswordStrength(val);

    if (isFrequentlyUsed(val)) {
      score = 0;
      showWarningText(passwordMeter);
    } else {
      hideWarningText(passwordMeter);
    }

    outputStrength(passwordMeter, score);
  });
}

export default () => {
  if (!inputsArr.length) {
    return;
  }

  inputsArr.forEach(createListener);
};
