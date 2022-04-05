import { createMap } from './map.js';
import { showAlert} from './util.js';
import { getData } from './api.js';
import { inactivatorFilters, createSlider, setUserFormSubmit } from './work-with-form.js';
getData(createMap, showAlert, inactivatorFilters, createSlider);
setUserFormSubmit();
