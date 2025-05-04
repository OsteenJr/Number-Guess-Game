const userInput = document.getElementById('details');
const submitBtn = document.getElementById('submitBtn');
const com = document.getElementById('comments');
const comTwo = document.getElementById('commentstwo');


let minNumber = 1; 
let maxNumber = 100;
let answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let userAnswer = userInput.value;
let guess;
let attempts = 0;
let running = true;

submitBtn.onclick = function () {
    if (!running) return;

    const userAnswer = Number(userInput.value);

    if (isNaN(userAnswer) || userAnswer < minNumber || userAnswer > maxNumber) {
        com.textContent = "Please enter a valid number between 1 and 100";
        comTwo.textContent = "";
        return;
    }

    attempts++;

    if (userAnswer > answer) {
        com.textContent = "";
        comTwo.textContent = "The value is too high, try again";
        comTwo.style.color = "orange";
    } else if (userAnswer < answer) {
        com.textContent = "";
        comTwo.textContent = "The value is too low, try again";
        comTwo.style.color = "blue";
    } else {
        com.textContent = "";
        comTwo.textContent = `You are correct! The answer was ${answer}. It took you ${attempts} attempts.`;
        comTwo.style.color = "green";
        running = false;
    }

    userInput.value = "";
};