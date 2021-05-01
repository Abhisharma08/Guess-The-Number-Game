'use strict';

var sNumber = Math.trunc(Math.random() * 10) + 1;
var score = 10;
var highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber);
  //   When there is no input------------------
  if (!inputNumber) {
    document.querySelector('.message').textContent = '❌ No  Number';
  }
  //   When player wins-----------------
  else if (inputNumber === sNumber) {
    document.querySelector('.message').textContent = '🎉 Winner!';
    document.querySelector('.number').textContent = sNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //   When player input lower number-----------------------------
  else if (inputNumber > sNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😑 You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   When player input higher number-------------------------
  else if (inputNumber < sNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😑 You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  sNumber = Math.trunc(Math.random() * 10) + 1;
  score = 10;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
