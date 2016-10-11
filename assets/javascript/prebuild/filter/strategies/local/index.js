import { template } from 'lodash';

import filterItems from './filterItems';
import sortItems from './sortItems';

const templateEl = document.getElementById('item-template');
const templateHTML = templateEl.innerHTML;

const countEl = document.querySelector('.js-filter-count');

function filterProducts(arr, opts) {
  const filtered = filterItems(arr, opts);
  const sorted = sortItems(filtered, opts);

  return sorted;
}

function outputCount(count) {
  const word = (count === 1) ? 'product' : 'products';
  countEl.innerHTML = `${count} ${word}`;
}

function render(arr, outputEl) {
  const output = outputEl;

  const productTemplate = template(templateHTML);

  const mapped = productTemplate({ items: arr });

  outputCount(arr.length);

  output.innerHTML = mapped;
}

export default {
  renderWithOptions(outputEl, opts, cb) {
    console.log('render with options', opts);

    if (typeof window.products === 'undefined') {
      throw new Error('By using the local filter strategy, you should have a products array');
    }

    const filtered = filterProducts(window.products, opts);

    render(filtered, outputEl);

    this.updateOptions();

    cb();
  },

  updateOptions() {
    if (typeof this.updateOptionsListener !== 'undefined') {
      this.updateOptionsListener();
    }
  },
};
