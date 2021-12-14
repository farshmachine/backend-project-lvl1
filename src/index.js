import readlineSYnc from 'readline-sync';

export default function playGame(game) {
  const username = readlineSYnc.question('May i have you name? ');
  console.log(`Hello, ${username}!`);

  game.showRules();
  game.play(username);
}
