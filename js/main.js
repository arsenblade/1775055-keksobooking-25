import { createCards } from './generate-cards.js';
import {activatorFormAndFilters, inactiveFormAndFilters} from './work-with-form.js'
const cardsAr = createCards();
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(cardsAr[0]);
inactiveFormAndFilters();
activatorFormAndFilters();