export const getRandomNumber = (firstNumber, secondNumber) => {
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
};

export const getRandomNumberFloat = (firstNumber, secondNumber, count) => {
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor((minNumber + Math.random() * (maxNumber - minNumber)) * Math.pow(10, count)) / Math.pow(10, count);
};

export const getFormatNumber = () => {
  const randomN = getRandomNumber(1, 10);
  return `0${randomN}`.slice(-2);
};
