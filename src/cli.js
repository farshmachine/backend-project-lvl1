import readlineSYnc from 'readline-sync';

export function greeting() {
  console.log('Welcone to the Brain Games');
  const username = readlineSYnc.question('May i have you name? ');
  console.log(`Hello, ${username}!`);
}

