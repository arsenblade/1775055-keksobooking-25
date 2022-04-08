const ServerAddress = {
  SHIP_ADDRESS: 'https://25.javascript.pages.academy/keksobooking',
  RECEIVING_ADDRESS: 'https://25.javascript.pages.academy/keksobooking/data'
};


const getData = (createMap, createLabelOnMap, onFail, inactivatorFilters) => {
  fetch(ServerAddress.RECEIVING_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Не удалось загрузить данные');
    })
    .then((ads) => {
      createMap();
      createLabelOnMap(ads)
    })
    .catch((err) => {
      onFail('Не удалось загрузить данные. Перезгрузите страницу!');
      createMap();
      inactivatorFilters();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    ServerAddress.SHIP_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Не удалось отправить форму');
      }
    })
    .catch((err) => {
      onFail();
    });
};

export { getData, sendData };
