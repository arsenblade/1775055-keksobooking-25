import { similarAds } from './data.js';
import { generateCard } from './generate-one-card.js';

const address = document.querySelector('#address');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const sliderElement = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const type = document.querySelector('#type');

const createMap = () => {
  const map = L.map('map-canvas')
    .setView({
      lat: similarAds[0].location.lat,
      lng: similarAds[0].location.lng,
    }, 15);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  address.value = `${similarAds[0].location.lat}, ${similarAds[0].location.lng}`;

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: similarAds[0].location.lat,
      lng: similarAds[0].location.lng,
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

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: Number(price.placeholder),
      max: 100000,
    },
    start: Number(price.placeholder),
    step: 200,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    price.value = sliderElement.noUiSlider.get();
  });

  type.addEventListener('change',()=> {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: Number(price.placeholder),
        max: 100000
      },
      start: Number(price.placeholder),
    });
  });
};

export{createMap, createSlider};
