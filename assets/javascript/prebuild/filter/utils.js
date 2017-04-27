import qs from 'qs';

/**
 * Get the type of input we're dealing with
 * @param {Node} input DOM element
 * @return {String} Type of input (e.g. text, email, textarea, select)
 */
export const getInputType = (input) => {
  if (input.getAttribute('type')) {
    return input.getAttribute('type');
  }

  return input.tagName.toLowerCase();
};

/**
 * Get the new page number based on the given action
 * @param {String/Number} action Either a page number or action (prev/next)
 * @param {Number} currentPage
 * @param {Number} totalPages
 * @return {Number} New page number
 */
export const getPageNumber = (action, currentPage, totalPages) => {
  let pageNum = parseInt(action, 10);

  // If we're dealing with a non-integer we assume it's either 'prev' or 'next'
  if (isNaN(pageNum)) {
    // Increment or decrement the page number
    pageNum = (action === 'prev') ? currentPage - 1 : currentPage + 1;

    // Handle out-of-bounds page numbers
    if (pageNum > totalPages) {
      pageNum = totalPages;
    }

    if (pageNum < 1) {
      pageNum = 1;
    }
  }

  return pageNum;
};

/**
 * Replaces the browser history (if supported) with the given data in the URL
 * @param {Object} data Data to write into the URL
 * @return {Void}
 */
export const rewriteHistory = (data) => {
  if (typeof history.replaceState === 'function') {
    // Get the full base url without any parameters
    const baseUrl = [location.protocol, '//', location.host, location.pathname].join('');

    // Stringify the data object into a query string
    const stringified = qs.stringify(data, { encode: false });

    // Output the query string after the baseUrl as GET parameters
    window.history.replaceState({}, '', `${baseUrl}?${stringified}`);
  }
};

/**
 * Get the data attribute value from an element
 * @param {Object} $el jQuery element to fetch the data from
 * @param {String} key Key of the data to get
 * @param {Mixed} fallback For when the data hasn't been set
 * @param {String} typeCast When you specifically want a type of data (e.g. integer)
 * @return {Mixed} Value depending on data value and typecast
 */
export const getData = ($el, key, fallback, typeCast = false) => {
  let val = $el.data(key);

  if (typeof val === 'undefined' || !val) {
    val = fallback;
  }

  if (typeCast && typeCast === 'integer') {
    val = parseInt(val, 10);
  }

  if (typeCast && typeCast === 'float') {
    val = parseFloat(val);
  }

  return val;
};

export const setData = ($el, key, val) => {
  $el.data(key, val);
};
