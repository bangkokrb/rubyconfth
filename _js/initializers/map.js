import Map, { DEFAULT_SELECTOR } from '../components/Map/';

document.querySelectorAll(DEFAULT_SELECTOR).forEach(mapElement => {
  const map = new Map(mapElement);
  map.render();
});
