const sliderElement = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: Number(price.placeholder),
      max: 100000,
    },
    start: 80,
    step: 200,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    price.value = sliderElement.noUiSlider.get();
  });
};

export {createSlider};
