import qs from 'qs';

export default () => qs.parse(location.hash.substring(1));
