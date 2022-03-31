import { similarAds } from './data.js';
import { generateCard } from './generate-one-card.js';

const address = document.querySelector('#address');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createMap = () => {
  const map = L.map('map-canvas')
    .setView({
      lat: 35.6895,
      lng: 139.69171,
    }, 15);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  address.value = '35.6895, 139.69171';

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.6895,
      lng: 139.69171,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerGroup = L.layerGroup().addTo(map);


  const addingRegularAd = (similarAd) => {
    const { location } = similarAd;
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
      .bindPopup(generateCard(similarAd, cardTemplate));
  };

  similarAds.forEach((similarAd) => {
    addingRegularAd(similarAd);
  });

};

export{createMap};
