const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function getRandomInteger(min = MIN_NUMBER, max = MAX_NUMBER) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
  return number % 2 === 0;
}

function getCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function showRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function play() {
  return getRandomInteger();
}

export {
  showRules,
  play,
  getCorrectAnswer,
};
