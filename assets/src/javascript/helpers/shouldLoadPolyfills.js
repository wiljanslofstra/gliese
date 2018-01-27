export default () => (
  !Modernizr.raf ||
  !window.Promise ||
  typeof Object.assign !== 'function' ||
  !('classList' in document.createElement('a'))
);
