const notify = require("gulp-notify");

function handleErrors(errorObject) {
  if (typeof errorObject.messageOriginal !== 'undefined') {
    notify.onError(errorObject.messageOriginal).apply(this, arguments);
  }

  console.error(errorObject.toString());

  if (typeof this.emit === 'function') {
    this.emit('end');
  }
}

module.exports = handleErrors;
