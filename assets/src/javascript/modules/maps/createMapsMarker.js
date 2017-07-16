/* global google */

/**
 * Create a custom icon for the Google Maps marker
 * @param  {String} icon         Marker image path
 * @param  {String} size         Size of the marker (e.g. 24,18)
 * @param  {String} anchor       Anchor of the marker (e.g. 20,12)
 * @return {Object}              Custom icon object
 */
function createCustomIcon(icon, size, anchor) {
  const markerSize = size.split(',');
  const markerAnchor = anchor.split(',');

  const iconSize = new google.maps.Size(
    parseInt(markerSize[0], 10),
    parseInt(markerSize[1], 10),
  );

  const originX = 0;
  const originY = 0;

  return {
    url: icon,
    size: iconSize,
    scaledSize: iconSize,
    origin: new google.maps.Point(originX, originY),
    anchor: new google.maps.Point(
      parseInt(markerAnchor[0], 10),
      parseInt(markerAnchor[1], 10),
    ),
  };
}

/**
 * Mark your territory with a marker
 * @param {String} lat            Latitude of the marker
 * @param {String} lng            Longitude of the marker
 * @param {String} markerIcon     Marker image (if false the default is used)
 * @param {String} markerSize     Size of the marker (e.g. 25,14)
 * @param {String} markerAnchor   Anchor of the marker (e.g. 20,12)
 * @param {String} markerTitle    Title for the marker
 * @param {Object} map            Google Maps object
 * @return {Object}               Google Maps marker
 */
export default (lat, lng, markerIcon, markerSize, markerAnchor, markerTitle, map) => {
  // Create marker geo location object with the array above
  const position = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  // Get the marker title or empty string
  const title = (typeof markerTitle !== 'undefined') ?
    markerTitle :
    '';

  const options = {
    position,
    map,
    title,
  };

  if (typeof markerIcon !== 'undefined' && markerIcon) {
    options.icon = createCustomIcon(markerIcon, markerSize, markerAnchor);
  }

  // Create the marker and add to this.map
  return new google.maps.Marker(options);
};
