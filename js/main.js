import {createAd} from './data.js';

const SIMILAR_ADS_COUNT = 10;
const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAd);
console.log(similarAds);
