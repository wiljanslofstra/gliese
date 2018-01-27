/**
 * Data attribute that should be added on the toggle buttons
 * @type {string}
 */
const DATA_TOGGLE_TARGET = 'data-toggle-target';

/**
 * Data attribute that sets the initial visibility to open
 * @type {string}
 */
const DATA_OPEN_TARGET = 'data-toggle-open';

/**
 * Data attribute that allows listening to the location hash for opening
 * @type {string}
 */
const DATA_HASH_TARGET = 'data-toggle-hash';

/**
 * All toggle elements
 * @type {array}
 */
let toggles = document.querySelectorAll(`[${DATA_TOGGLE_TARGET}]`);
toggles = Array.prototype.slice.call(toggles);

const toggleModule = {

  /**
   * Initialize the toggle module
   * @return {void}
   */
  initialize() {
    // Loop through every toggle button
    toggles.forEach((toggle) => {
      // Get the target for the current toggle
      const target = this.getTargetForToggle(toggle);

      // Hide all initially
      this.hideTargetWithToggle(toggle);

      // If this data attribute is set, we open on page load
      if (target.getAttribute(DATA_OPEN_TARGET) !== null) {
        this.toggleTargetWithToggle(toggle);

      // If this element allows listening to the hash
      } else if (target.getAttribute(DATA_HASH_TARGET) !== null) {
        // If the hash equals the id we open the target
        if (window.location.hash.replace(/^#/, '') === target.id) {
          this.toggleTargetWithToggle(toggle);
        }
      }
    });

    this.createEvents();
  },

  /**
   * Create all events for the toggle
   * @return {void}
   */
  createEvents() {
    document.addEventListener('click', this.handleClick.bind(this));
  },

  /**
   * Get the closest toggle element, this search up the three
   * @param {DOMElement} el Clicked element
   * @return {DOMElement|null} Returns the closest toggle element or null
   */
  getClosestToggle(el) {
    if (el.closest) {
      return el.closest('[data-toggle-target]');
    }

    while (el) {
      if (el.nodeType === 1 && el.hasAttribute(DATA_TOGGLE_TARGET)) {
        return el;
      }

      el = el.parentNode; // eslint-disable-line no-param-reassign
    }

    return null;
  },

  /**
   * Get the target element (body)
   * @param {string} id ID of the target element
   * @return {DOMElement}
   */
  getTarget(id) {
    const targetId = id.replace(/^#/, '');
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      throw new Error(`Target element with ID ${targetId} not found`);
    }

    return targetElement;
  },

  /**
   * Shortcut method to get the target for a toggle element (most likely a button)
   * @param {DOMElement} toggle
   * @return {DOMElement}
   */
  getTargetForToggle(toggle) {
    return this.getTarget(toggle.getAttribute(DATA_TOGGLE_TARGET));
  },

  /**
   * Hide target element for the given toggle element
   * @param {DOMElement} toggle
   * @return {void}
   */
  hideTargetWithToggle(toggle) {
    // Get the target element
    const target = this.getTargetForToggle(toggle);

    // Set a11y attribute that denotes the relation between toggle and target
    toggle.setAttribute('aria-controls', target.id);

    // Hide the target
    this.toggleTargetWithToggle(toggle, true);
  },

  /**
   * Toggle the target element given the toggle element
   * @param {DOMElement} toggle
   * @param {boolean?} overwriteIsExpanded Overwrite the isExpanded variable to force show/hide
   * @return {void}
   */
  toggleTargetWithToggle(toggle, overwriteIsExpanded) {
    const target = this.getTargetForToggle(toggle);
    let isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    // Overwrite is the variable is set
    if (typeof overwriteIsExpanded !== 'undefined') {
      isExpanded = overwriteIsExpanded;
    }

    toggle.setAttribute('aria-expanded', !isExpanded);
    target.setAttribute('aria-hidden', isExpanded);
  },

  /**
   * Method that handles the toggle for event listeners
   * @param {object} e Event object
   * @return {void}
   */
  handleToggle(e) {
    const getToggle = this.getClosestToggle(e.target);

    if (getToggle) {
      e.preventDefault();
      this.toggleTargetWithToggle(getToggle);
    }
  },

  /**
   * Handles the onclick on the document
   * @param {object} e Event object
   * @return {void}
   */
  handleClick(e) {
    this.handleToggle(e);
  },
};

export default toggleModule;
