import readlineSYnc from 'readline-sync';
import showGreeting from './cli.js';

function getUsername() {
  const username = readlineSYnc.question('May i have you name? ');
  console.log(`Hello, ${username}!`);

  return username;
}

export default function playGame(game) {
  const {
    showRules,
    play,
    getCorrectAnswer,
  } = game;
  let round = 1;

  showGreeting();
  const username = getUsername();
  showRules();

  do {
    const question = play();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSYnc.question('Answer: ');
    const correctAnswer = getCorrectAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      round = 1;
    }
  } while (round <= 3);
}
