const firstNumberBox = document.getElementById("number1");
const secondNumberBox = document.getElementById("number2");
const resultBox = document.getElementById("number3");
const addition = document.getElementById("plus");
const subtraction = document.getElementById("minus");
const multiplication = document.getElementById("mul");
const division = document.getElementById("divide");
const remainder = document.getElementById("modulus");
const timer = document.getElementById("timer");

let firstNumber, secondNumber, result, operation, score = 0;
let time = 20;
let timerId;

function randomize() {
  firstNumber = Math.round(Math.random() * 100);
  secondNumber = Math.round(Math.random() * 100);

  if (firstNumber < secondNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }

  operation = Math.floor(Math.random() * 5) + 1;

  switch (operation) {
    case 1: result = firstNumber + secondNumber; break;
    case 2: result = firstNumber - secondNumber; break;
    case 3: result = firstNumber * secondNumber; break;
    case 4: result = Math.floor(firstNumber / secondNumber); break;
    case 5: result = firstNumber % secondNumber; break;
  }

  firstNumberBox.textContent = firstNumber;
  secondNumberBox.textContent = secondNumber;
  resultBox.textContent = result;
}

function startTimer() {
  timerId = setInterval(() => {
    timer.textContent = --time;
    if (time === 0) {
      clearInterval(timerId);
      location.href = "./gameover.html?score=" + score;
    }
  }, 1000);
}

function resetTime() {
  clearInterval(timerId);
  time = 20;
  timer.textContent = time;
  startTimer();
}

addition.onclick = () => evaluateOperation(firstNumber + secondNumber);
subtraction.onclick = () => evaluateOperation(firstNumber - secondNumber);
multiplication.onclick = () => evaluateOperation(firstNumber * secondNumber);
division.onclick = () => evaluateOperation(Math.floor(firstNumber / secondNumber));
remainder.onclick = () => evaluateOperation(firstNumber % secondNumber);

function evaluateOperation(userResult) {
  if (userResult === result) {
    score++;
    randomize();
    resetTime();
  } else {
    clearInterval(timerId);
    location.href = "./gameover.html?score=" + score;
  }
}

randomize();
startTimer();
