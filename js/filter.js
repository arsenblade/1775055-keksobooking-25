const MAX_VIEW_PINS = 10;

const sortType = document.querySelector('#housing-type');

const sortPrice = document.querySelector('#housing-price');

const sortRooms = document.querySelector('#housing-rooms');

const sortGuests = document.querySelector('#housing-guests');

const checkboxFeatures = document.querySelectorAll('.map__checkbox');

const filterByType = (ad) => sortType.value === 'any' || sortType.value === ad.offer.type;

const filterByRoom = (ad) => sortRooms.value === 'any' || Number(sortRooms.value) === ad.offer.rooms;

const filterByGuests = (ad) => sortGuests.value === 'any' || Number(sortGuests.value) === ad.offer.guests;

const getCheckedFeatures = () => Array.from(checkboxFeatures).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);

const filterByFeatures = (point, filterFeatures) => point.offer.features && filterFeatures.every((feature) => point.offer.features.some((featureValue) => feature === featureValue));


const filterByPrice = (ad) => {
  const price = {
    middle: ad.offer.price >= 10000 && ad.offer.price <= 50000,
    low: ad.offer.price < 10000,
    high: ad.offer.price > 50000
  };

  return sortPrice.value === 'any' || price[sortPrice.value];
};


const filter = (dataAds) => {
  const filteredAds = [];
  for (let i = 0; i < dataAds.length && filteredAds.length < MAX_VIEW_PINS; i++) {
    const ad = dataAds[i];
    if (filterByFeatures(ad, getCheckedFeatures()) && filterByType(ad) && filterByRoom(ad) && filterByGuests(ad) && filterByPrice(ad)) {
      filteredAds.push(ad);
    }
  }
  return filteredAds;
};

export { filter };
