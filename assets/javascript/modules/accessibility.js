const accessibility = {
  initialize() {
    this.accessibleSelect();
  },

  /**
   * Adds focus states to custom select wrapper
   * @return {Void}
   */
  accessibleSelect() {
    // Get all select elements
    const selectNodes = document.getElementsByTagName('select');

    // Transform node list to array
    const selects = Array.prototype.slice.call(selectNodes);

    selects.forEach((select) => {
      select.addEventListener('focus', (e) => {
        e.currentTarget.parentNode.classList.add('is-focussed');
      });

      select.addEventListener('focusout', (e) => {
        e.currentTarget.parentNode.classList.remove('is-focussed');
      });

      if (select.hasAttribute('disabled')) {
        select.parentNode.classList.add('is-disabled');
      }
    });
  },
};

export default accessibility;
