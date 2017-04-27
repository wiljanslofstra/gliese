import jump from 'jump.js';
import formSerialize from 'form-serialize';
import { getPageNumber, rewriteHistory, getData, setData } from './filter/utils';
import fetchFromAPI from './filter/api';

const $filter = $('.js-filters');
const $form = $('.js-filters-form');
const $products = $('.js-filter-products');
const $options = $('.js-filters-options');
const $pagination = $('.js-filter-pagination');

const dataType = 'json';

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
      const pageNum = getPageNumber(
        $clickedEl.data('page'),
        this.getPageNumber(),
        this.getTotalPages(),
      );

      this.scrollToTop();
      this.setPageNumber(pageNum);
      this.runFilter();
    });
  },

  getPageNumber() {
    return getData($filter, 'filter-page', 1, 'integer');
  },

  getTotalPages() {
    return getData($filter, 'filter-total-pages', 1, 'integer');
  },

  getApiUrl() {
    return getData($filter, 'filter-api', '');
  },

  getApiMethod() {
    return getData($filter, 'filter-api-method', 'POST');
  },

  setPageNumber(num) {
    setData($filter, 'filter-page', num);
  },

  scrollToTop() {
    jump($filter[0], {
      offset: -15,
      a11y: false,
    });
  },

  serializeElement(el) {
    return formSerialize(el, { hash: true });
  },

  runFilter() {
    const filters = this.serializeElement($form[0]);
    const options = this.serializeElement($options[0]);
    const pageNumber = this.getPageNumber();
    const data = Object.assign({}, filters, options, { page: pageNumber });

    rewriteHistory(data);

    fetchFromAPI(this.getApiUrl(), this.getApiMethod(), data, dataType, (res) => {
      this.outputProducts(res.products_html);
      this.outputPagination(res.pagination_html);
      this.updateFiltersUI(res.filters);
    });
  },

  outputProducts(html) {
    $products.html(html);
  },

  outputPagination(html) {
    $pagination.html(html);
  },

  updateFiltersUI(filters) {
    filters.forEach((item) => {
      const id = item.id;
      const count = (typeof item.count !== 'undefined') ? item.count : 1;
      const el = document.getElementById(`filter[${id}]`);
      const parent = el.parentNode;
      const countLabel = parent.querySelector('.js-count');

      if (count <= 0) {
        el.setAttribute('disabled', 'disabled');
      } else {
        el.removeAttribute('disabled');
      }

      if (countLabel) {
        countLabel.innerHTML = count;
      }

      if (typeof item.children !== 'undefined' && item.children.length) {
        this.updateFiltersUI(item.children);
      }
    });
  },
};

export default filter;
