export default (el, cb) => {
  const inputElements = el.querySelectorAll('input,select');
  const inputElementsArr = Array.prototype.slice.call(inputElements);

  inputElementsArr.forEach((input) => {
    input.addEventListener('change', () => {
      cb();
    });
  });
};
