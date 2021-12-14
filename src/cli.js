import readlineSYnc from 'readline-sync';

export default function greeting() {
  const username = readlineSYnc.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!`);

  return username;
}
