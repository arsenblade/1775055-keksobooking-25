const sortType = document.querySelector('#housing-type');

const sortPrice = document.querySelector('#housing-price');

const sortRooms = document.querySelector('#housing-rooms');

const sortGuests = document.querySelector('#housing-guests');

const wifiFilter = document.querySelector('#filter-wifi');
const dishwasherFilter = document.querySelector('#filter-dishwasher');
const parkingFilter = document.querySelector('#filter-parking');
const washerFilter = document.querySelector('#filter-washer');
const elevatorFilter = document.querySelector('#filter-elevator');
const conditionerFilter = document.querySelector('#filter-conditioner');

const filterByType = (ad) => sortType.value === 'any' || sortType.value === ad.offer.type;

const filterByRoom = (ad) => sortRooms.value === 'any' || Number(sortRooms.value) === ad.offer.rooms;

const filterByGuests = (ad) => sortGuests.value === 'any' || Number(sortGuests.value) === ad.offer.guests;

const filterByWifi = (ad) => ad.offer.features && (!wifiFilter.checked || ad.offer.features.some((feature) => feature === wifiFilter.value));

const filterByDishwasher = (ad) => ad.offer.features && (!dishwasherFilter.checked || ad.offer.features.some((feature) => feature === dishwasherFilter.value));

const filterByParking = (ad) => ad.offer.features && (!parkingFilter.checked || ad.offer.features.some((feature) => feature === parkingFilter.value));

const filterByWasher = (ad) => ad.offer.features && (!washerFilter.checked || ad.offer.features.some((feature) => feature === washerFilter.value));

const filterByElevator = (ad) => ad.offer.features && (!elevatorFilter.checked || ad.offer.features.some((feature) => feature === elevatorFilter.value));

const filterByConditioner = (ad) => ad.offer.features && (!conditionerFilter.checked || ad.offer.features.some((feature) => feature === conditionerFilter.value));


const filterByPrice = (ad) => {
  if(sortPrice.value === 'any') {
    return true;
  }
  if(sortPrice.value === 'middle' && ad.offer.price >= 10000 && ad.offer.price <= 50000) {
    return true;
  }
  if(sortPrice.value === 'low' && ad.offer.price < 10000) {
    return true;
  }
  if(sortPrice.value === 'high' && ad.offer.price > 50000) {
    return true;
  }

  return false;
};


const filter = (dataAds) => {
  const filteredAds = [];
  for(let i = 0; i < dataAds.length && filteredAds.length < 10; i++) {
    const ad = dataAds[i];
    if(filterByType(ad) && filterByRoom(ad) && filterByGuests(ad) && filterByPrice(ad)
    && filterByWifi(ad) && filterByDishwasher(ad) && filterByElevator(ad) && filterByWasher(ad)
    && filterByParking(ad) && filterByConditioner(ad)) {
      filteredAds.push(ad);
    }
  }
  return filteredAds;
};

export {filter};
