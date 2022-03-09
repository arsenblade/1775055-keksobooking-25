const typeArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkArray = ['12:00', '13:00', '14:00'];

const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photosArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_ADS_COUNT = 10;

const randomNumber = (firstNumber, secondNumber) => {
  let maxNumber = Math.max(firstNumber,secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
};

const randomNumberFloat = (firstNumber, secondNumber, count) => {
  let maxNumber = Math.max(firstNumber,secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor((minNumber + Math.random() * (maxNumber - minNumber))*Math.pow(10, count)) / Math.pow(10, count);
};

const getRandomNumber = () => {
  let randomN = randomNumber(1,10);
  return `0${randomN}`.slice(-2);
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
    rooms: randomNumber(1,10),
    guests: randomNumber(1,30),
    checkin: checkArray[randomNumber(0,2)],
    checkout: checkArray[randomNumber(0,2)],
    features: featuresArray[randomNumber(0,4)],
    description: 'Красивое место',
    photos: photosArray[randomNumber(0,2)]
  };

  return {
    author,
    offer,
    location
  }
};

const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAd);
