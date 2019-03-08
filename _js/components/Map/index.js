// Default map selector
export const DEFAULT_SELECTOR = '.map';

export const DEFAULT_OPTIONS = {
  zoom: 14,
  size: '640x640',
  scale: 2,
  maptype: 'roadmap',
  key: process.env.GOOGLE_MAP_API_KEY
};

class Map {
  /**
   * Initializer
   *
   * @param {Element} elementRef - HTML node to mount the Google map.
   * @param {Object} options - Configuration options.
   * */
  constructor(elementRef, options = {}) {
    this.elementRef = elementRef;
    this.options = Object.assign(DEFAULT_OPTIONS, options);

    this.baseStaticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap';
    this.baseSearchMapUrl = 'https://maps.google.com/';
    this.center = null;

    this._bind();
    this._addEventListeners();
    this._setup();
  }

  /**
   * Set the map as a background image (responsive behaviour)
   * */
  render() {
    this.elementRef.setAttribute('style', `background-image: url(${this._requestUrl()})`);
  }

  // Event listeners

  /**
  * Redirect to a dynamic Google Map
  *
  * @param {Event} _event - click event
  * */
  onClick(_event) {
    event.preventDefault();

    window.open(`${this.baseSearchMapUrl}?q=${encodeURIComponent(this.marker)}`, '_blank');
  }

  // Private

  /**
   * Bind all functions to the local instance scope.
   * */
  _bind() {
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Set-up Google map with markers.
   * */
  _setup() {
    this._retrieveCenter();
    this._retrieveMarker();
  }

  /**
   * Adds all the required event listeners.
   * */
  _addEventListeners() {
    this.elementRef.addEventListener('click', this.onClick);
  }

  /**
  * Retrieve the map center parameters from data attributes
  * */
  _retrieveCenter() {
    const { geolocation } = this.elementRef.dataset;

    if (!geolocation) {
      throw Error('Missing data-geolocation attribute');
    }

    if (!this._isValidGeolocation(geolocation)) {
      throw Error('Invalid geolocation format. Verify that it complies with this format: data-gelocation="lat,lng"');
    }

    this.center = geolocation;
  }

  /**
   * Retrieve marker parameters from data attributes
   * */
  _retrieveMarker() {
    const { marker } = this.elementRef.dataset;

    this.marker = marker;
  }

  /**
  * Validate if a string is a valid geolocation
  *
  * @param {String} geolocation - latitude and longitude separated by a comma
  * @return {Boolean} whether the passed in string is a valid gelocation
  * */
  _isValidGeolocation(geolocation) {
    if (geolocation === '') {
      return false;
    }

    const geolocationParts = geolocation.split(',');

    return geolocationParts.length === 2 &&
      geolocationParts.every(geolocationPart => !isNaN(geolocationPart));
  }

  /**
   * Generate the request URL with the required parameters
   *
   * @return {String} - complete URL to fetch a static map
   * */
  _requestUrl() {
    let urlParams = this._requestParams().join('&');

    return [this.baseStaticMapUrl, urlParams].join('?');
  }

  /**
  * List of requests parameters to fetch a custom map
  *
  * @return {Array} - URI encoded list of required map params
  * */
  _requestParams() {
    let requestParams = Object.assign(this.options, {
      center: this.center,
      markers: `color:red|${this.center}`
    });

    return Object.keys(requestParams).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(requestParams[key])}`;
    });
  }
}

export default Map;
