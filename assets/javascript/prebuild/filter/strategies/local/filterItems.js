import { each, filter } from 'lodash';

export default (arr, opts) => {
  return filter(arr, (product) => {
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
