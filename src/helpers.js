export function isEven(number) {
  return number % 2 === 0;
}

export function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
