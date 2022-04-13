import { generateCard } from './generate-one-card.js';
import { inactivatorFilters, activatorFormAndFilters, inactiveFormAndFilters } from './work-with-form.js';
import { showAlert, debounce } from './util.js';
import { getData } from './api.js';
import { filter } from './filter.js';

const MAP_ZOOM = 12;

const address = document.querySelector('#address');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const filterForm = document.querySelector('.map__filters');

const resetFormButton = document.querySelector('.ad-form__reset');
const submitFormButton = document.querySelector('.ad-form__submit');

const StartCoordinates = {
  LAT: 35.68951,
  LNG: 139.69211
};

inactiveFormAndFilters();

const createMap = () => {
  const map = L.map('map-canvas')
    .setView({
      lat: StartCoordinates.LAT,
      lng: StartCoordinates.LNG,
    }, MAP_ZOOM);

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerGroup = L.layerGroup().addTo(map);

  const addingRegularAd = (dataAd) => {
    const { location } = dataAd;
    const lat = location.lat;
    const lng = location.lng;
    const marker = L.marker(
      {
        lat,
        lng
      },
      {
        icon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(generateCard(dataAd, cardTemplate));
  };

  const drawPins = (dataAds) => {
    markerGroup.clearLayers();
    filter(dataAds).forEach((dataAd) => addingRegularAd(dataAd));
  };

  map.on('load', getData(
    (data) => {
      activatorFormAndFilters();
      drawPins(data);
      filterForm.addEventListener('change', debounce(drawPins.bind(null, data)));
    },
    (message) => showAlert(message),
    () => inactivatorFilters())
  );

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  address.value = `${StartCoordinates.LAT}, ${StartCoordinates.LNG}`;
  const Startlatlng = L.latLng(StartCoordinates.LAT, StartCoordinates.LNG);

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: StartCoordinates.LAT,
      lng: StartCoordinates.LNG
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on('move', (evt) => {
    address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  resetFormButton.addEventListener('click', () => {
    mainPinMarker.setLatLng(Startlatlng);
    markerGroup.eachLayer((layer) => {
      layer.closePopup();
    });
  });

  submitFormButton.addEventListener('click', () => {
    mainPinMarker.setLatLng(Startlatlng);
    markerGroup.eachLayer((layer) => {
      layer.closePopup();
    });
  });

};

export { createMap };
