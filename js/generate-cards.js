import { similarAds } from './data.js';
import { generateCard } from './generate-one-card.js';


const createCards = () => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardArray = similarAds.map((similarAd) => generateCard(similarAd, cardTemplate));
  return cardArray;
};

export { createCards };
