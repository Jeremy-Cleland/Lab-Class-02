'use strict';

let score = 0;

let userName = prompt('What is your name?');

alert(`Welcome to Codito Mojito ${userName}! Good luck! Your current score is: ${score}`);

function questionOne() {
  let q1 = prompt(`${userName} Did I serve as Speical Forces Medic in the Army?`).toLowerCase();

  if (q1 === 'yes' || q1 === 'y') {
    alert('Correct');
    score += 5;
  } else {
    alert('Wrong');
  }
}

questionOne();

function questionTwo() {
  let q2 = prompt(`${userName} Are Windows computers better than Apples?`).toLowerCase();

  if (q2 === 'no' || q2 === 'n') {
    alert('Correct');
    score += 5;
  } else {
    alert('Wrong');

  }
}

alert(`Your score is ${score}`);

questionTwo();

function questionThree() {
  let q3 = prompt(`${userName}...  Twitter is better now?`).toLowerCase();

  if (q3 === 'yes' || q3 === 'y') {
    alert('Correct');
    score += 5;
  } else {
    alert('Wrong');
  }
}

questionThree();

function questionFour() {
  let q4 = prompt(`${userName} The only thing Facebook has done good for the world was create React?`).toLowerCase();

  if (q4 === 'yes' || q3 === 'y') {
    alert('Correct');
    score += 5;
  } else {
    alert('Wrong');

  }
}

questionFour();

alert(`Your score is ${score}`);

function questionFive() {
  let q5 = prompt(`${userName}, I have 4 kids? `).toLowerCase();

  if (q5 === 'yes' || q5 === 'y') {
    alert('Correct');
    score += 5;
  } else {
    alert('Wrong!');
  }

}

questionFive();

function questionSix() {
  let myAge = '33';
  let q6attempts = 4;
  let q6correctAnswer = false;

  while (q6attempts && !q6correctAnswer) {

    let myAgeQuestion = prompt(`How old am I? You have ${q6attempts} attempts remaining`);
    q6attempts--;

    if (myAge === myAgeQuestion) {
      alert(`You guessed ${myAgeQuestion}. Correct! You had ${q6attempts} attempts remaining.`);
      q6correctAnswer = true;
      score += 5;
    }

    else if (myAgeQuestion < myAge) {
      alert(`${userName}, You guessed ${myAgeQuestion}. That is too low. You have ${q6attempts} to go.`);
    }

    else if (myAgeQuestion > myAge) {
      alert(`you guessed ${myAgeQuestion}. That is too high. You have ${q6attempts} to go.`);
    }

    else {
      alert(`Please enter a numerical number. You have ${q6attempts} to go.`);
    }
  }

  if (q6attempts === 0 && !q6correctAnswer) {
    alert('My correct age is 33');
  }
}
questionSix();

function questionSeven() {
  let q7attempts = 6;
  let q7correctAnswer = false;
  let children = ['Cora', 'Norah', 'Liam', 'Natalie'];

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
    alert(`Wow, Crazy! All of my kids names are... ${children}`);
    score += 5;
  }
  else {
    alert(`Good try! Maybe next time. Here are their names: ${children}.`);
  }
}

questionSeven();

alert(`Thanks for playing ${userName}. You're score was ${score}.`);
