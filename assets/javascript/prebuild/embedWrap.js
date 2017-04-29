import wrapElement from '../helpers/wrapElement';

// Reference to all iframes on the page
const iframes = document.getElementsByTagName('iframe');
const videos = document.getElementsByTagName('video');

// Transform node list to array
const iframesArray = Array.prototype.slice.call(iframes);
const videosArray = Array.prototype.slice.call(videos);

// Concatenate all embed arrays together
const embedsArray = iframesArray.concat(videosArray);

// Wrap the elements in a div with this class
const WRAP_CLASS = 'embed-wrap';

// Fallback to this ratio if no width and height are found on the embed element
const FALLBACK_RATIO = 0.5625; // 16/9

const HUNDRED = 100;

/**
 * Get the ratio from a embed (only if the width and height are set) or fallback to 16/9
 * @param  {Node} el Embed to calculate the ratio for
 * @return {Void}
 */
function getRatio(el) {
  let ratio = FALLBACK_RATIO;

  if (el.getAttribute('width') && el.getAttribute('height')) {
    const width = parseInt(el.getAttribute('width'), 10);
    const height = parseInt(el.getAttribute('height'), 10);

    if (!isNaN(width) || !isNaN(height)) {
      ratio = height / width;
    }
  }

  return ratio;
}

/**
 * Create a wrapper element around the embed
 * @param  {Node} el Element to wrap
 * @return {Void}
 */
function makeWrappedEmbed(el) {
  const wrapper = document.createElement('div');
  const embedRatio = getRatio(el) * HUNDRED;

  // Set the classname in the new element
  wrapper.className = WRAP_CLASS;

  // Add a padding bottom to the ratio of the embed
  wrapper.style.paddingBottom = `${embedRatio}%`;

  // Wrap the embed with the wrapper element
  wrapElement(el, wrapper);
}

export default () => {
  // Check if embeds are found in the DOM
  if (!embedsArray.length) {
    return;
  }

  // Loop through all embeds, and wrap them if the're not already wrapped
  embedsArray.forEach((embedEl) => {
    const parent = embedEl.parentNode;

    if (parent.className.indexOf(WRAP_CLASS) < 0) {
      makeWrappedEmbed(embedEl);
    }
  });
};
