import readlineSYnc from 'readline-sync';

export default function greeting() {
  const username = readlineSYnc.question('Welcome to the Brain Games!\nMay I have you name? ');
  console.log(`Hello, ${username}!`);

  return username;
}
