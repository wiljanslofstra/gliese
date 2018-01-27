/**
 * Load script dynamically
 * @param {string} src JavaScript file path
 * @param {function} done Callback after the script has been loaded
 * @throws Will throw an error when the script can't be loaded
 * @return {void}
 */
export default (src, done) => {
  const js = document.createElement('script');
  js.src = src;
  js.onload = done;

  js.onerror = () => {
    throw new Error(`Failed to load script ${src}`);
  };

  document.head.appendChild(js);
};
