import { each, filter, sortBy, template } from 'lodash';

function filterProductsArr(productsArr, opts) {
  return filter(productsArr, (product) => {
    let productValid = true;

    // Loop through filters
    each(opts, (opt, optKey) => {
      if (typeof product[optKey] === 'undefined') {
        return;
      }

      if (Array.isArray(opt)) {
        const prodOptions = product[optKey];
        let checkboxesValid = false;

        opt.forEach((filterOption) => {
          if (prodOptions.indexOf(filterOption) >= 0) {
            checkboxesValid = true;
          }
        });

        if (!checkboxesValid) {
          productValid = false;
        }
      } else if (product[optKey].indexOf(opt) < 0) {
        productValid = false;
      }
    });

    return productValid;
  });
}

function sortProducts(productsArr, opts) {
  // Remove sorting from the options
  if (typeof opts.sorting === 'undefined') {
    return productsArr;
  }

  const sortingProperty = opts.sorting.split('-')[1];
  const sortingDirection = opts.sorting.split('-')[0];

  const sorted = sortBy(productsArr, product => product[sortingProperty]);

  if (sortingDirection === 'desc') {
    sorted.reverse();
  }

  return sorted;
}

function filterProducts(productsArr, opts) {
  // Loop through products
  const filtered = filterProductsArr(productsArr, opts);

  const sorted = sortProducts(filtered, opts);

  return sorted;
}

function render(productsArr, outputEl) {
  const output = outputEl;

  const productTemplate = template(`
    <li style="margin-bottom: 15px; width: 33%; float: left;">
      Name:<br>
      <%- name %><br>
      Price:<br>
      <%- price %><br>
      Populariy:<br>
      <%- popularity %><br>
      Color:<br>
      <%- color %><br>
    </li>
  `);

  const mapped = productsArr.map(productTemplate);

  output.innerHTML = `<ul>${mapped.join('')}</ul>`;
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
