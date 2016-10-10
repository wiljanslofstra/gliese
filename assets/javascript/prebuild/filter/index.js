import qs from 'qs';
import handleInput from './handleInput';
import getFilterOptions from './getFilterOptions';
import setFilters from './setFilters';
import config from './config';

// Different strategies available to render products
import strategyLocal from './strategyLocal';
import strategyRemote from './strategyRemote';

// Select the strategry with the config parameter
const strategy = config.FILTER_STRATEGY === 'local' ? strategyLocal : strategyRemote;

// Reference to the filter
const filter = document.querySelector(config.FILTER_CLASS);

// Reference to the output element
const output = document.querySelector(config.OUTPUT_CLASS);

function outputUrlParameters(obj) {
  const stringified = qs.stringify(obj, { encode: false });
  location.hash = stringified;
}

function retrieveUrlParameters() {
  return qs.parse(location.hash.substring(1));
}

function runFilter() {
  getFilterOptions(filter, (options) => {
    outputUrlParameters(options);

    strategy.renderWithOptions(output, options, () => {
      console.log('render succesful');
    });
  });
}

export default () => {
  const hash = location.hash;

  strategy.updateOptionsListener = () => {
    console.log('update options');
  };

  if (hash) {
    const options = retrieveUrlParameters();
    setFilters(filter, options);
    runFilter();
  } else if (config.FILTER_ON_INIT) {
    runFilter();
  }

  filter.classList.remove('is-cloaked');

  handleInput(filter, () => {
    runFilter();
  });
};
