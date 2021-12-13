import readlineSYnc from 'readline-sync';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function showRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
  return number % 2 === 0;
}

function isRightAnswer(number, answer) {
  if (isEven(number) && answer === 'yes') {
    return true;
  }

  if (!isEven(number) && answer === 'no') {
    return true;
  }

  return false;
}

function getCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function play() {
  let round = 1;

  do {
    const number = getRandomInteger(MIN_NUMBER, MAX_NUMBER);

    console.log(`Question: ${number}`);
    const answer = readlineSYnc.question('Your answer: ');

    if (isRightAnswer(number, answer)) {
      round += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${getCorrectAnswer(number)}.`);
      console.log('Let\'s try again ${}`);
    }
  } while (round <= 3);
}
