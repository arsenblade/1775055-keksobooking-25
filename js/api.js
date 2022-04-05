const getData = (onSuccess, onFail, inactivatorFilters ,createSlider) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((ads) => {
      onSuccess(ads);
      createSlider();
    })
    .catch(() => {
      onFail('Не удалось загрузить данные. Перезгрузите страницу!');
      onSuccess();
      inactivatorFilters();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
