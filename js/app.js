'use strict';

let userName = prompt('What is your name?');

let score = 0;

alert(`Welcome to Codito Mojito ${userName}! Here are the rules, I will be asking you 5 (yes or no) questions! Your current score is ${score}`);

let wrongAnswer = 'WRONG!';
let rightAnswer = 'Correct!';
let reallyBadAnswer = 'ARE YOU KIDDING ME!, WRONG!';

// Question 1
let questionOne = prompt(`${userName}...Did I serve as Speical Forces Medic in the Army?`).toLowerCase();

if (questionOne === 'yes' || questionOne === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(wrongAnswer);
}
alert(`Your score is ${score}`);

// Question 2
let questionTwo = prompt(`${userName} Would I rather develop for Andriod and Windows over Apple?`).toLowerCase();

if (questionTwo === 'no' || questionTwo === 'n') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(reallyBadAnswer);

  alert(`Your score is ${score}`);
}

// Question 3
let questionThree = prompt(`${userName}...Do you think I live in Michigan?`).toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(wrongAnswer);
}

alert(`Your score is ${score}`);

// Question 4
let questionFour = prompt(`${userName}...Do you... yes you! ${userName} Do you hink I am under 35 years old?`).toLowerCase();

if (questionFour === 'yes' || questionFour === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(reallyBadAnswer);

}
alert(`Your score is ${score}`);
// Question 5
let questionFive = prompt(`${userName}...Yes or No...I think Software Developing is an awesome career path?`).toLowerCase();

if (questionFive === 'yes' || questionFive === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(reallyBadAnswer);
}

alert(`Your score is ${score}, ${userName});

