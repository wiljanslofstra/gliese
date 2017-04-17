import 'slick-carousel';

const $slider = $('.js-slider');

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
    if ($slider.length) {
      this.create();
    }
  },

  create() {
    $slider.slick({
      prevArrow: getButton('Vorige', 'slider__arrow slick-prev', 'arrow-left'),
      nextArrow: getButton('Volgende', 'slider__arrow slick-next', 'arrow-right'),
    });
  },
};

export default generalSlider;
