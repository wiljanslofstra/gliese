import 'slick-carousel';

const $sliders = $('.js-slider');

function getIcon(name) {
  return `<svg class='icon icon-${name}'><use xlink:href='#icon-${name}'></use></svg>`;
}

function getButton(text, className, icon) {
  return `
    <button type="button" class="${className}">
      <span class="sr-only">${text}</span>
      ${getIcon(icon)}
    </button>
  `;
}

const generalSlider = {
  initialize() {
    if ($sliders.length) {
      this.create();
    }
  },

  create() {
    $sliders.each((i, slider) => {
      const $slider = $(slider);
      const options = $slider.data();

      const config = {
        prevArrow: getButton('Vorige', 'slider__arrow slick-prev', 'arrow-left'),
        nextArrow: getButton('Volgende', 'slider__arrow slick-next', 'arrow-right'),
      };

      if (typeof options !== 'undefined') {
        const optionKeys = Object.keys(options);

        optionKeys.forEach((option) => {
          const regex = new RegExp('^slider', 'g');

          if (regex.test(option)) {
            let transformedOption = option.replace('slider', '');
            transformedOption = transformedOption[0].toLowerCase() + transformedOption.slice(1);

            config[transformedOption] = options[option];
          }
        });
      }

      $slider.slick(config);
    });
  },
};

export default generalSlider;
