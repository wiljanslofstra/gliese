import qs from 'qs';

export default (obj) => {
  const stringified = qs.stringify(obj, { encode: false });

  if (window.history) {
    window.history.replaceState(undefined, undefined, `#${stringified}`);
  } else {
    location.hash = stringified;
  }
};
