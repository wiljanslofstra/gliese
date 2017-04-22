import qs from 'qs';

export default (url) => {
  if (url.indexOf('?') < 0) {
    return {};
  }

  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  if (queryString.indexOf('#') >= 0) {
    queryString = queryString.split('#')[0];
  }

  return qs.parse(queryString);
};
