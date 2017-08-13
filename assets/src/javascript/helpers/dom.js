if (!Element.prototype.matches) {
  Element.prototype.matches = (
    Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  );
}

function toArray(els) {
  return Array.prototype.slice.call(els);
}

function find(expr) {
  return (typeof expr === 'string') ? toArray(document.querySelectorAll(expr)) : expr;
}

/**
 * Create a delegated event listener
 * @param {string} type Event type (e.g. click, change etc)
 * @param {string|node} parent Parent element
 * @param {string} el Element that the event should trigger on
 * @return {promise} Promise that will be resolved once an event has been triggered
 */
function delegateEvent(type, parent, el) {
  return new Promise((resolve) => {
    find(parent).addEventListener(type, (e) => {
      if (e.target && e.target.matches(el)) {
        resolve(e);
      }
    });
  });
}

export default {
  find,
  delegateEvent,
};
