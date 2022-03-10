export const randomNumber = (firstNumber, secondNumber) => {
  let maxNumber = Math.max(firstNumber,secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
};

export const randomNumberFloat = (firstNumber, secondNumber, count) => {
  let maxNumber = Math.max(firstNumber,secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor((minNumber + Math.random() * (maxNumber - minNumber))*Math.pow(10, count)) / Math.pow(10, count);
};

export const getRandomNumber = () => {
  let randomN = randomNumber(1,10);
  return `0${randomN}`.slice(-2);
};
