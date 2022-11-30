'use strict';

let userName = prompt('What is your name?');

let score = 0;

alert(`Welcome to Codito Mojito ${userName}! Good luck! Your current score is: ${score}`);

let wrongAnswer = 'Wrong!';
let rightAnswer = 'Correct!';

// Question 1
let q1 = prompt(`${userName} Did I serve as Speical Forces Medic in the Army?`).toLowerCase();

if (q1 === 'yes' || q1 === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(wrongAnswer);
}
alert(`Your score is ${score}`);

// Question 2
let q2 = prompt(`${userName} Are Windows computers better than Apples?`).toLowerCase();

if (q2 === 'no' || q2 === 'n') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(wrongAnswer);

  alert(`Your score is ${score}`);
}

// Question 3
let q3 = prompt(`${userName}...  Twitter is better now?`).toLowerCase();

if (q3 === 'yes' || q3 === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(wrongAnswer);
}

alert(`Your score is ${score}`);

// Question 4
let q4 = prompt(`${userName} The only thing Facebook has done good for the world was create React?`).toLowerCase();

if (q4 === 'yes' || q3 === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(wrongAnswer);

}
alert(`Your score is ${score}`);

// Question 5
let q5 = prompt(`${userName}, I have 4 kids? `).toLowerCase();

if (q5 === 'yes' || q5 === 'y') {
  alert(rightAnswer);
  score += 5;
} else {
  alert(wrongAnswer);
}


// Question 6
let myAge = '33';
let q6attempts = 4;
let q6correctAnswer = false;

while (q6attempts && !q6correctAnswer) {

  let myAgeQuestion = prompt(`How old am I? You have ${q6attempts} attempts remaining`);
  q6attempts--;

  if (myAge === myAgeQuestion) {
    // console.log(`You guessed ${myAgeQuestion}. Correct! You had ${q6attempts} attempts remaining.`);
    alert(`You guessed ${myAgeQuestion}. Correct! You had ${q6attempts} attempts remaining.`);
    q6correctAnswer = true;
    score += 5;
  }

  else if (myAgeQuestion < myAge) {
    // console.log(`you guessed ${kingdomHearts}. That is too low. You have ${q6attempts} to go.`);
    alert(`${userName}, You guessed ${myAgeQuestion}. That is too low. You have ${q6attempts} to go.`);
  }

  else if (myAgeQuestion > myAge) {
    // console.log(`you guessed ${myAgeQuestion}. That is too high. You have ${q6attempts}.`);
    alert(`you guessed ${myAgeQuestion}. That is too high. You have ${q6attempts} to go.`);
  }

  else {
    // console.log(`Please enter a number. You have ${q6attempts}.`);
    alert(`Please enter a numerical number. You have ${q6attempts} to go.`);
  }
}
if (q6attempts === 0 && !q6correctAnswer) {
  // console.log('My correct age is 33');
  alert('My correct age is 33');
}

alert(`Your score is ${score}`);

// Question 7
let q7attempts = 6;
let q7correctAnswer = false;
let children = ['cora', 'norah', 'liam', 'natalie'];

while (q7attempts && !q7correctAnswer) {
  let userAnswer = prompt(`Lets see if you can guess one of my childrens names! Good luck with this one! ${q7attempts}.`).toLowerCase();
  q7attempts--;

  for (let i = 0; i < children.length; i++) {
    if (userAnswer === children[i]) {
      q7correctAnswer = true;
    }
  }
}

if (q7correctAnswer) {
  // console.log(`Wow, Crazy! All of my kids names are... ${children}`);
  alert(`Wow, Crazy! All of my kids names are... ${children}`);
  score += 5;
}
else {
  // console.log(`Good try! Maybe next time. Here are their names: ${children}.`);
  alert(`Good try! Maybe next time. Here are their names: ${children}.`);
}
// Final Message
alert(`Thanks for playing ${userName}. You're score was ${score}.`);
