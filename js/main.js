import { createCards } from './generate-cards.js';
const cardsAr = createCards();
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(cardsAr[0]);
