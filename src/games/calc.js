import { getRandomNumber } from '../helpers.js';
import playGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function getQuestion(min = MIN_NUMBER, max = MAX_NUMBER) {
  const operators = ['+', '*', '-'];
  const operator = getRandomNumber(0, operators.length - 1);
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);

  return `${firstNumber} ${operators[operator]} ${secondNumber}`;
}

function getCorrectAnswer(question) {
  const [a, action, b] = question.split(' ');
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  if (action === '+') {
    return firstNumber + secondNumber;
  }

  if (action === '-') {
    return firstNumber - secondNumber;
  }

  return String(firstNumber * secondNumber);
}

function showRules() {
  console.log('What is the result of the expression?');
}

export default () => playGame({
  showRules,
  getQuestion,
  getCorrectAnswer,
});
