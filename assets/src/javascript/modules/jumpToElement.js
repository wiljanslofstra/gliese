/* eslint-disable */
import jump from 'jump.js';
/* eslint-enable */

// Listen for clicks on this trigger class name
const JUMP_TRIGGER_CLASS = '.js-jump';

// Enabling A11Y will add tabindex and focus on the target. We disable it by default, because
// it could cause scroll jumping
const ENABLE_A11Y = false;

// Get all triggers
const jumpElements = document.querySelectorAll(JUMP_TRIGGER_CLASS);
const jumpElementsArr = Array.prototype.slice.call(jumpElements);

export default {
  /**
   * Loop through elements, and create event listeners for every element
   * @return {Void}
   */
  initialize() {
    jumpElementsArr.forEach(this.createEvent.bind(this));
  },

  /**
   * Create event listener for the given element
   * @param  {Node}  el  Element to listen for clicks
   * @return {Void}
   */
  createEvent(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const target = el.dataset.jumpTarget;
      const offset = this.verifyOffset(el.dataset.jumpOffset);

      // Ensure that element exists
      if (!document.querySelector(target)) {
        return;
      }

      this.handleJump(target, offset);
    });
  },

  /**
   * Jump to the target element with a optional offset
   * @param  {String} target Target selector
   * @param  {Number} offset Offset for the scroll (for fixed navigation bars etc.)
   * @return {Void}
   */
  handleJump(target, offset) {
    jump(target, {
      offset,
      a11y: ENABLE_A11Y,
    });
  },

  /**
   * Verify that the offset is correct, and if it's a string we are going to use that
   * as a selector and get the height
   * @param  {Number/String} offset  Offset in pixels or a selector
   * @return {Number}                Offset in pixels
   */
  verifyOffset(offset) {
    if (typeof offset === 'undefined') {
      return 0;
    } else if (isNaN(parseInt(offset, 10))) {
      return this.getOffsetFromElement(offset);
    }

    return parseInt(offset, 10);
  },

  /**
   * Get the offset by measuring the given element
   * @param  {String} selector Selector to measure the height of
   * @return {Number}          Height of the element in pixels
   */
  getOffsetFromElement(selector) {
    const targetEl = document.querySelector(selector);

    if (!targetEl) {
      return 0;
    }

    return targetEl.clientHeight * -1;
  },
};
