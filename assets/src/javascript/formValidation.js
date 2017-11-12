/* global Parsley */

require('parsleyjs/dist/parsley.min.js');

// Load translations
require('parsleyjs/dist/i18n/nl');

/**
 * Language to fallback to when the document language is not available
 * @type {string}
 */
const fallbackLanguage = 'en';

/**
 * Retrieve all available validator languages
 * @type {string[]}
 */
const availableLanguages = Object.keys(Parsley._validatorRegistry.catalog); // eslint-disable-line no-underscore-dangle, max-len

/**
 * Get the document language by retrieving the lang attribute on the HTML element
 * @type {string}
 */
const documentLanguage = document.querySelector('html').getAttribute('lang');

/** @type {string} */
let validationLanguage = documentLanguage;

// Check if the document language is available in the loaded translations
if (availableLanguages.indexOf(documentLanguage) < 0) {
  validationLanguage = fallbackLanguage;
}

// Set the validation language
Parsley.setLocale(validationLanguage);
