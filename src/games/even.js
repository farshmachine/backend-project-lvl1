import playGame from '../index.js';
import { getRandomNumber, isEven } from '../helpers.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function getQuestion(min = MIN_NUMBER, max = MAX_NUMBER) {
  return getRandomNumber(min, max);
}

function getCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function showRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

export default () => playGame({
  showRules,
  getCorrectAnswer,
  getQuestion,
});
