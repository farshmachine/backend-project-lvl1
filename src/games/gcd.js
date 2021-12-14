import playGame from '../index.js';
import { getGCD, getRandomNumber } from '../helpers.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

function getQuestion(min = MIN_NUMBER, max = MAX_NUMBER) {
  const a = getRandomNumber(min, max);
  const b = getRandomNumber(min, max);
  return `${a} ${b}`;
}

function getCorrectAnswer(question) {
  const [a, b] = question.split(' ');
  return String(getGCD(a, b));
}

function showRules() {
  console.log('Find the greatest common divisor of given numbers.');
}

export default () => playGame({
  showRules,
  getCorrectAnswer,
  getQuestion,
});
