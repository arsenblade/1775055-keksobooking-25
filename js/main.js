import { createMap, createLabelOnMap } from './map.js';
import { showAlert} from './util.js';
import { getData } from './api.js';
import { inactivatorFilters, setUserFormSubmit } from './work-with-form.js';
getData(createMap, createLabelOnMap, showAlert, inactivatorFilters);
setUserFormSubmit();
