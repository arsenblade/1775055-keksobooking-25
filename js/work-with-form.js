const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');

const activatorFormAndFilters = () => {
    form.classList.remove('ad-form--disabled');
    filters.classList.remove('map__filters--disabled');
};

const inactiveFormAndFilters = () => {
    form.classList.add('ad-form--disabled');
    filters.classList.add('map__filters--disabled');
};

export { activatorFormAndFilters, inactiveFormAndFilters};