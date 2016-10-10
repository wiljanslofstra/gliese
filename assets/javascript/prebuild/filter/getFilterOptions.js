import serializeAndRepopulate from './helpers/serializeAndRepopulate';

/**
 * Get all filter input values
 * @param  {Node}     el Filter element
 * @param  {Function} cb Callback for when the filters are retrieved from the DOM
 * @return {Void}
 */
export default (el, cb) => {
  const serialized = serializeAndRepopulate(el);

  cb(serialized);
};
