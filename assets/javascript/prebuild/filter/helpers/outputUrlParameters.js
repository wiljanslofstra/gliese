import qs from 'qs';

export default (obj) => {
  const stringified = qs.stringify(obj, { encode: false });
  location.hash = stringified;
};
