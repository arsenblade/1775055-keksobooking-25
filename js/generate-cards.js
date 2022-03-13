import {similarAds} from './data.js';
import {generateCard} from './generate-one-card.js';


export const createCards = () => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardArray = [];
  const funcCardArray = () => {
    for(let i = 0; i < similarAds.length; i++){
      cardArray.push(generateCard(similarAds[i], cardTemplate));
    }
  };
  funcCardArray();
  return cardArray;
};
