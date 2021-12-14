import readlineSYnc from 'readline-sync';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  const username = readlineSYnc.question('May I have you name? ');
  console.log(`Hello, ${username}!`);

  return username;
}
