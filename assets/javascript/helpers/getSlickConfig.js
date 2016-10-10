function getSlickArrow(name) {
  return `
    <svg viewBox="0 0 32 32" class="icon icon-${name}">
      <use xlink:href="#icon-${name}"></use>
    </svg>
  `;
}

const defaultConfig = {
  cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)',
  speed: 600,
  mobileFirst: true,
  zIndex: 5,
  prevArrow: `
    <button type="button" class="slick-prev u-no-button">
      ${getSlickArrow('arrow-left')}
    </button>
  `,
  nextArrow: `
    <button type="button" class="slick-next u-no-button">
      ${getSlickArrow('arrow-right')}
    </button>
  `,
};

/**
 * Returns a slick config object
 * @param  {Object} config Custom config options to merge with defaults
 * @return {Object}       Slick configuration object
 */
export default function getSlickConfig(config) {
  if (config) {
    return Object.assign({}, defaultConfig, config);
  }

  return defaultConfig;
}
