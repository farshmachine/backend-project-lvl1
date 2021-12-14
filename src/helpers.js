export function isEven(number) {
  return number % 2 === 0;
}

export function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

export function getGCD(a, b) {
  if (b === 0 || a === b) {
    return a;
  }

  return getGCD(b, a % b);
}

export function getProgression() {
  const step = getRandomNumber(2, 5);
  const start = getRandomNumber(1, 100);
  const removedItem = getRandomNumber(0, 9);

  return new Array(10).fill('').map((_el, index) => {
    if (index === removedItem) {
      return '..';
    }

    return start + index * step;
  }).join(' ');
}

export function isPrime(number) {
  const counter = number / 2;

  for (let i = 2; i <= counter; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
