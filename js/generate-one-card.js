const generateFeatures = (featuresList, offerFeatures) => {
  featuresList.forEach((featuresItem) => {
    const isNecessary = offerFeatures.some(
      (feature) => featuresItem.classList.contains(`popup__feature--${feature}`),
    );

    if (!isNecessary) {
      featuresItem.remove();
    }
  });
};

const generatePhotos = (dataPhotos, photoTemplate) => {
  if(dataPhotos === undefined){
    photoTemplate.remove();
    return;
  }

  photoTemplate.src = dataPhotos[0];
  for(let i = 1; i < dataPhotos.length; i++) {
    const photoTemplateClone = photoTemplate.cloneNode(true);
    photoTemplateClone.src = dataPhotos[i];
    photoTemplate.parentElement.append(photoTemplateClone);
  }
};

const generateCard = (dataCard, cardTemplateOriginal) => {
  const cardTemplateInner = cardTemplateOriginal.cloneNode(true);
  const { offer, author } = dataCard;

  const title = cardTemplateInner.querySelector('.popup__title');
  title.innerText = offer.title;

  const address = cardTemplateInner.querySelector('.popup__text--address');
  address.innerText = offer.address;

  const price = cardTemplateInner.querySelector('.popup__text--price');
  price.innerText = `${offer.price} ₽/ночь`;

  const type = cardTemplateInner.querySelector('.popup__type');
  type.innerText = Object.values(offer.type);

  const capacity = cardTemplateInner.querySelector('.popup__text--capacity');
  capacity.innerText = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  const time = cardTemplateInner.querySelector('.popup__text--time');
  time.innerText = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featuresContainer = cardTemplateInner.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  if(offer.features !== undefined) {
    generateFeatures(featuresList, offer.features);
  }

  const description = cardTemplateInner.querySelector('.popup__description');
  description.innerText = offer.description;

  const photo = cardTemplateInner.querySelector('.popup__photo');
  generatePhotos(offer.photos, photo);

  const avatar = cardTemplateInner.querySelector('.popup__avatar');
  avatar.src = author.avatar;

  return cardTemplateInner;
};

export { generateCard };

