const randomNumber = (firstNumber, secondNumber) => {
  let maxNumber = Math.max(firstNumber,secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
};

const randomNumberZap = (firstNumber, secondNumber, count) => {
  let maxNumber = Math.max(firstNumber,secondNumber);
  let minNumber = Math.min(firstNumber, secondNumber);
  return Math.floor((minNumber + Math.random() * (maxNumber - minNumber + 1))*Math.pow(10, count)) / Math.pow(10, count);
};
