import readlineSYnc from 'readline-sync';
import showGreeting from './cli.js';

export default function playGame(game) {
  const {
    showRules,
    getQuestion,
    getCorrectAnswer,
  } = game;
  let round = 1;

  const username = showGreeting();
  showRules();

  do {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSYnc.question('Answer: ');
    const correctAnswer = getCorrectAnswer(question);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      round = 1;
      return;
    }
  } while (round <= 3);

  console.log(`Congratulations, ${username}!`);
}
