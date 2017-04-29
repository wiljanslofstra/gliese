/**
 * Returns a responsive object for the Slick configuration
 * @param  {Object} $slider jQuery slider element
 * @return {Object}         Responsive configuration object
 */
export default function getResponsiveOption($slider) {
  const responsiveData = $slider.data('responsive');
  const outputObj = [];

  // If no data attribute is defined the responsive configuration is empty
  if (!responsiveData) {
    return [];
  }

  // Split individual responsive parts (e.g. ['400:3','768:4'])
  const splitStr = responsiveData.split(',');

  // Loop through individual responsive parts
  splitStr.forEach((item) => {
    // Split the responsive part in breakpoint and number of slides
    const splitOption = item.split(':');
    const breakpoint = parseFloat(splitOption[0]);
    const slidesToShow = parseFloat(splitOption[1]);

    // Create responsive object for Slick
    outputObj.push({
      breakpoint,
      settings: {
        slidesToShow,
      },
    });
  });

  return outputObj;
}
