import qs from 'qs';
import getUrlParameters from '../helpers/getUrlParameters';

const $filter = $('.js-filters');
const $form = $('.js-filters-form');
const $products = $('.js-filter-products');
const $options = $('.js-filters-options');

const filter = {
  initialize() {
    if (!$filter.length || !$form.length || !$products.length) {
      throw new Error('One or more filter elements are missing');
    }

    $form.add($options).on('change', 'input[type="checkbox"], input[type="radio"], select', () => {
      this.runFilter();
    });

    $form.add($options).on('keyup', 'input[type="text"], textarea', () => {
      this.runFilter();
    });
  },

  getInputType(input) {
    if (input.getAttribute('type')) {
      return input.getAttribute('type');
    }

    return input.tagName.toLowerCase();
  },

  getFormInput($el) {
    const values = {};

    $el.find('input, select, textarea').toArray().forEach((input) => {
      const type = this.getInputType(input);

      if (type === 'checkbox' || type === 'radio') {
        if (input.checked) {
          values[input.name] = true;
        }
      } else {
        values[input.name] = input.value;
      }
    });

    return values;
  },

  runFilter() {
    const filters = this.getFormInput($form);
    const options = this.getFormInput($options);
    const obj = Object.assign({}, filters, options);

    if (typeof history.replaceState === 'function') {
      const baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
      const stringified = qs.stringify(obj, { encode: false });
      window.history.replaceState({}, '', `${baseUrl}?${stringified}`);
    }

    $.ajax({
      url: '/docs/pages/filter/filter-api.php',
      type: 'POST',
      data: obj,
      dataType: 'json',
      success: (res) => {
        this.outputProducts(res.products_html);
      },
    });
  },

  outputProducts(html) {
    $products.html(html);
  },
};

export default filter;
