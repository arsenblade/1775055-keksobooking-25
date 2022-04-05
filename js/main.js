import {activatorFormAndFilters, inactiveFormAndFilters} from './work-with-form.js';
import {createMap, createSlider} from './map.js';
inactiveFormAndFilters();
activatorFormAndFilters();
createSlider();
fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((wizards) => {
    console.log(wizards);
    createMap(wizards);
  });