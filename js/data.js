import { getRandomNumber, getRandomNumberFloat, getFormatNumber } from './util.js';

const SIMILAR_ADS_COUNT = 10;

const typeArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkArray = ['12:00', '13:00', '14:00'];

const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photosArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAd = () => {
  const author = {
    avatar: `img/avatars/user${getFormatNumber()}.png`
  };

  const location = {
    lat: getRandomNumberFloat(35.65000, 35.70000, 5),
    lng: getRandomNumberFloat(139.70000, 139.80000, 5)
  };

  const offer = {
    title: 'Ищем кекса',
    address: `${location.lat}, ${location.lng}`,
    price: getRandomNumber(1, 3000),
    type: typeArray[getRandomNumber(0, 4)],
    rooms: getRandomNumber(1, 10),
    guests: getRandomNumber(1, 30),
    checkin: checkArray[getRandomNumber(0, 2)],
    checkout: checkArray[getRandomNumber(0, 2)],
    features: featuresArray[getRandomNumber(0, 4)],
    description: 'Красивое место',
    photos: photosArray[getRandomNumber(0, 2)]
  };

  return {
    author,
    offer,
    location
  };
};

const similarAds = Array.from({ length: SIMILAR_ADS_COUNT }, createAd);
export { similarAds };
