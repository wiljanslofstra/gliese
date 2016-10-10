export default {
  // Where the input fields reside
  FILTER_CLASS: '.js-filter',

  // Where the products will be rendered
  OUTPUT_CLASS: '.js-filter-list',

  // Choose the strategy for the filter
  // local: Using a array already available on the page
  // remote: Fetching products from an API
  FILTER_STRATEGY: 'local',

  // Run the filter when initializing the filter
  FILTER_ON_INIT: true,

  // Selector for a filter group. A filter group groups related input fields
  GROUP_SELECTOR: '[data-filter-group]',

  // Same as above, but used when searching for a specific group
  GROUP_SELECTOR_WITH_PLACEHOLDER: '[data-filter-group="%s"]',

  // Selector for the sorting input/select field
  SORT_SELECTOR: '[data-filter-sort]',
};
