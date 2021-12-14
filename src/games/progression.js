import playGame from '../index.js';

import { getProgression } from '../helpers.js';

function getQuestion() {
  const progression = getProgression();
  console.log(progression);
  return progression;
}

function getCorrectAnswer(question) {
  const progression = question.split(' ');
  const filteredProgression = progression.filter((el) => el !== '..');
  const [first, second] = filteredProgression;
  const step = Number(second) - Number(first);
  const removedItemIndex = progression.findIndex((el) => el === '..');
  const previousItem = progression[removedItemIndex - 1];
  const nextItem = progression[removedItemIndex + 1];

  if (previousItem) {
    return String(Number(previousItem) + step);
  }

  return String(Number(nextItem) - step);
}

function showRules() {
  console.log('What number is missing in the progression?');
}

export default () => playGame({
  showRules,
  getCorrectAnswer,
  getQuestion,
});
