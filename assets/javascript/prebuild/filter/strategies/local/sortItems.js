import { sortBy } from 'lodash';

export default (arr, opts) => {
  // Remove sorting from the options
  if (typeof opts.sorting === 'undefined') {
    return arr;
  }

  const sortingProperty = opts.sorting.split('-')[1];
  const sortingDirection = opts.sorting.split('-')[0];

  const sorted = sortBy(arr, product => product[sortingProperty]);

  if (sortingDirection === 'desc') {
    sorted.reverse();
  }

  return sorted;
};
