import qs from 'qs';

const $filter = $('.js-filters');
const $form = $('.js-filters-form');
const $products = $('.js-filter-products');
const $options = $('.js-filters-options');
const $pagination = $('.js-filter-pagination');

const filter = {
  initialize() {
    if (!$filter.length || !$form.length || !$products.length) {
      throw new Error('One or more filter elements are missing');
    }

    $form.add($options).on('change', 'input[type="checkbox"], input[type="radio"], select', () => {
      this.setPageNumber(1);
      this.runFilter();
    });

    $form.add($options).on('keyup', 'input[type="text"], textarea', () => {
      this.setPageNumber(1);
      this.runFilter();
    });

    $pagination.on('click', 'a', (e) => {
      e.preventDefault();

      const $clickedEl = $(e.currentTarget);
      const pageNum = parseInt($clickedEl.data('page'), 10);

      if (!isNaN(pageNum)) {
        this.scrollToTop();
        this.setPageNumber(pageNum);
        this.runFilter();
      }
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

  getPageNumber() {
    return ($pagination.data('page')) ? parseInt($pagination.data('page'), 10) : 1;
  },

  setPageNumber(num) {
    $pagination.data('page', num);
  },

  scrollToTop() {
    $('body, html').animate({
      scrollTop: $filter.offset().top,
    });
  },

  runFilter() {
    const filters = this.getFormInput($form);
    const options = this.getFormInput($options);
    const pageNumber = this.getPageNumber();
    const obj = Object.assign({}, filters, options, { page: pageNumber });

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
        this.outputPagination(res.pagination_html);
      },
    });
  },

  outputProducts(html) {
    $products.html(html);
  },

  outputPagination(html) {
    $pagination.html(html);
  },
};

export default filter;
