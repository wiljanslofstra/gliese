import Awesomplete from 'awesomplete';
import { template } from 'lodash';
import normalizeForSearch from 'normalize-for-search';

const $autocomplete = $('.js-autocomplete');

const autocomplete = {
  initialize(el) {
    const $el = $(el);
    const data = $el.data();

    this.$el = $el;

    this.template = $(data.autoTemplate).html();

    this.awesomplete = new Awesomplete(el, {
      list: [],
      filter: this.filter.bind(this),
      item: this.item.bind(this),
      replace: this.replace.bind(this),
    });

    $el.on('keyup', () => {
      const val = $el.val();
      const api = data.autoApiUrl;
      const fieldKey = data.autoApiKey;

      $.ajax({
        url: api,
        data: {
          [fieldKey]: val,
        },
        success: this.outputList.bind(this),
      });
    });

    $el.on('awesomplete-select', (e) => {
      if (!data.autoCloseClick) {
        e.preventDefault();
      }
    });
  },

  outputList(res) {
    let list = '';

    if (typeof res === 'string') {
      list = JSON.parse(res);

      if (typeof list === 'string') {
        throw new Error('List returned from the API is incorrect and couldn\'t be parsed');
      }
    } else {
      list = res;
    }

    this.awesomplete._list = list; // eslint-disable-line

    this.awesomplete.evaluate();
  },

  filter(obj, input) {
    const title = normalizeForSearch(obj.value.title);
    const newInput = normalizeForSearch(input);

    return title.indexOf(newInput) === 0;
  },

  item(obj) {
    const compile = template(this.template);

    return $(compile(obj.value))[0];
  },

  replace(obj) {
    this.$el.val(obj.value.title);
  },
};

const autocompletes = {
  initialize() {
    $autocomplete.each((i, el) => {
      const inst = Object.assign({}, autocomplete);
      inst.initialize(el);
    });
  },
};

export default autocompletes;
