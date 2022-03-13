import { createCards } from './generate-cards.js';
const cardsAr = createCards();
const mapCanvas = document.querySelector('#map-canvas');
cardsAr.forEach((cardAr) => {
  mapCanvas.append(cardAr);
});
