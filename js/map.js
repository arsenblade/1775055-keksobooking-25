import { generateCard } from './generate-one-card.js';

const address = document.querySelector('#address');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const resetFormButton = document.querySelector('.ad-form__reset');

const StartCoordinates = {
  LAT: 35.68951,
  LNG: 139.69211
};

const map = L.map('map-canvas')
  .setView({
    lat: StartCoordinates.LAT,
    lng: StartCoordinates.LNG,
  }, 15);

const createMap = () => {
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
};

const createLabelOnMap = (dataAds) => {
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

  if (dataAds !== undefined) {
    dataAds.forEach((dataAd) => {
      addingRegularAd(dataAd);
    });
  }
}

export { createMap, createLabelOnMap };
