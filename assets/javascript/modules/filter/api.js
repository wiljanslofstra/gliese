/**
 * Make API call
 * @param {String} url URL to fetch data from
 * @param {String} type Request type (e.g. POST, GET)
 * @param {Object} data Object to send with the request
 * @param {String} dataType Type of data to expect from the server (e.g. json)
 * @param {Function} cb Callback function to be called on success
 * @return {Void}
 */
export default (url, type, data, dataType, cb) => {
  $.ajax({
    url,
    type,
    data,
    dataType,
    success: (res) => {
      cb(res);
    },
  });
};
