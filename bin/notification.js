var path = require('path');
var notifier = require('node-notifier');

// List of success messages, because why not?
var successMessages = [
  'Alright!',
  'It works!',
  'Succesful',
  'Yes!',
  'Compiled successfully',
];

// List of error messages
var errorMessages = [
  'Oh no...',
  'Something went wrong',
  'Whoops!',
  'Aw, Snap!',
  'Aaaah!',
  'Uh oh...',
];

/**
 * Get a random item from the given array
 * @param  {Array}  arr Array where we should get a random item from
 * @return {Any}        Random item from the array
 */
function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Send a notification
 * @param  {String} type    Type of the notification, either error or success
 * @param  {String} message Message to send to the user
 * @return {Void}
 */
module.exports = function(type, message) {
  // Switch the notification icon based on the type
  var icon = path.resolve(__dirname, (type === 'error') ?
    'assets/error.png' :
    'assets/success.png');

  // Get the notification title
  var title = getRandomFromArray((type === 'error') ? errorMessages : successMessages);

  // Send the notification to the user
  notifier.notify({
    title: title,
    message: message,
    icon: icon,
    appIcon: icon,
    sound: false,
  });
};
