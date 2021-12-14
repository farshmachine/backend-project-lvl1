import playGame from '../index.js';

import { getProgression } from '../helpers.js';

function getQuestion() {
  const progression = getProgression();
  console.log(progression);
  return progression;
}

function getCorrectAnswer(question) {
  const progression = question.split(' ');
  const [first, second] = progression;
  const step = Number(second) - Number(first);
  const removedItemIndex = progression.findIndex((el) => el === '..');

  return (Number(progression[removedItemIndex - 1]) + step).toString();
}

function showRules() {
  console.log('What number is missing in the progression?');
}

export default () => playGame({
  showRules,
  getCorrectAnswer,
  getQuestion,
});
