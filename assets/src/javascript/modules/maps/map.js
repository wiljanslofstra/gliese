/* global google */

import GoogleMapsLoader from 'google-maps';
import createMapsMarkers from './createMapsMarker';

const maps = document.querySelectorAll('.js-map');
const mapsArray = Array.prototype.slice.call(maps);

// Google Maps API key
const KEY = 'AIzaSyBiOvR43emT4NKzAK7k8nZGIbfCRO3APIU';

// Style array for custom colored maps
const STYLE = [];

const DEFAULT_OPTIONS = {
  disableDoubleClickZoom: true,
  scrollwheel: false,
  navigationControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable: false,
  streetViewControl: false,
  fullscreenControl: false,
};

const map = {
  initialize(el) {
    this.el = el;

    this.el.classList.add('is-loading');

    // Shortcut to all data attributes
    this.data = this.el.dataset;

    this.validateOptions(this.data);

    // Validate and retrieve geolocation
    const geo = this.data.geo.split(',');

    const latLng = {
      lat: parseFloat(geo[0]),
      lng: parseFloat(geo[1]),
    };

    // Validate and retrieve zoom
    const zoom = parseInt(this.data.zoom, 10);

    const mapObj = this.createMap(latLng, zoom);

    this.el.classList.remove('is-loading');

    if (typeof this.data.markerGeo !== 'undefined') {
      // Get the marker geo location
      const markerGeo = this.data.markerGeo.split(',');

      createMapsMarkers(
        markerGeo[0],
        markerGeo[1],
        this.data.markerIcon,
        this.data.markerSize,
        this.data.markerAnchor,
        this.data.markerTitle,
        mapObj,
      );
    }
  },

  validateOptions(dataObj) {
    const validations = {
      geo: 'No data-geo defined on the map element',
      zoom: 'No data-zoom defined on the map element',
    };

    const dataKeys = Object.keys(dataObj);

    Object.keys(validations).forEach((validation) => {
      const errMsg = validations[validation];

      if (dataKeys.indexOf(validation) < 0) {
        throw new Error(errMsg);
      }
    });
  },

  /**
   * Create a map
   * @return {Object} Google Maps object
   */
  createMap(center, zoom) {
    // Create Google map
    return new google.maps.Map(this.el, Object.assign({}, DEFAULT_OPTIONS, {
      center,
      zoom,
      styles: STYLE,
    }));
  },


};

export default {
  initialize() {
    if (!mapsArray.length) { return; }

    GoogleMapsLoader.KEY = KEY;

    GoogleMapsLoader.load(() => {
      mapsArray.forEach((mapEl) => {
        const mapInst = Object.assign({}, map);
        mapInst.initialize(mapEl);
      });
    });
  },
};
