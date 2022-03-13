import {randomNumber, randomNumberFloat, getRandomNumber} from './util.js';

const typeArray = [{'palace': 'Дворец'}, {'flat': 'Квартира'}, {'house': 'Дом'}, {'bungalow': 'Бунгало'}, {'hotel': 'Отель'}];

const checkArray = ['12:00', '13:00', '14:00'];

const photosArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const featuresGenerate = (counter) => {
  const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const featuresResult = [];
  for(let i = 0; i < counter; i++){
    const numberElement = randomNumber(0,featuresArray.length);
    featuresResult.push(featuresArray[numberElement]);
    featuresArray.splice(numberElement, 1);
  }
  return featuresResult;
};

const createAd = () => {
  const author = {
    avatar: `img/avatars/user${getRandomNumber()}.png`
  };

  const location = {
    lat: randomNumberFloat(35.65000, 35.70000, 5),
    lng: randomNumberFloat(139.70000, 139.80000, 5)
  };

  const offer = {
    title: 'Ищем кекса',
    address: `${location.lat}, ${location.lng}`,
    price: randomNumber(1,3000),
    type: typeArray[randomNumber(0,4)],
    rooms: randomNumber(1,5),
    guests: randomNumber(1,10),
    checkin: checkArray[randomNumber(0,2)],
    checkout: checkArray[randomNumber(0,2)],
    features: featuresGenerate(randomNumber(1,4)),
    description: 'Красивое место',
    photos: photosArray[randomNumber(0,2)]
  };

  return {
    author,
    offer,
    location
  };
};

const SIMILAR_ADS_COUNT = 10;
const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAd);
export{similarAds};
