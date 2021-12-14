import playGame from '../index.js';

import { getRandomNumber, isPrime } from '../helpers.js';

function getQuestion() {
  return getRandomNumber(2, 100);
}

function getCorrectAnswer(question) {
  return isPrime(question) ? 'yes' : 'no';
}

function showRules() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

export default () => playGame({
  showRules,
  getCorrectAnswer,
  getQuestion,
});
