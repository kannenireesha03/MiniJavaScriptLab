// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById("bmiWeight").value);
  const height = parseFloat(document.getElementById("bmiHeight").value);
  const result = document.getElementById("bmiResult");

  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
  } else {
    result.textContent = "Please enter valid values!";
  }
}

// Tip Calculator
function calculateTip() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);
  const result = document.getElementById("tipResult");

  if (bill > 0 && tipPercent >= 0) {
    const tip = (bill * tipPercent) / 100;
    const total = bill + tip;
    result.textContent = `Tip: ₹${tip.toFixed(2)}, Total: ₹${total.toFixed(2)}`;
  } else {
    result.textContent = "Please enter valid values!";
  }
}

// Age Checker
function checkAge() {
  const birthYear = parseInt(document.getElementById("birthYear").value);
  const currentYear = new Date().getFullYear();
  const result = document.getElementById("ageResult");

  if (birthYear > 1900 && birthYear <= currentYear) {
    const age = currentYear - birthYear;
    result.textContent = `You are ${age} years old.`;
  } else {
    result.textContent = "Please enter a valid birth year!";
  }
}

// Countdown Timer
let countdownInterval;
function startCountdown() {
  let seconds = parseInt(document.getElementById("countdownInput").value);
  const display = document.getElementById("countdownDisplay");
  clearInterval(countdownInterval);

  if (seconds > 0) {
    countdownInterval = setInterval(() => {
      display.textContent = `⏳ ${seconds} seconds remaining`;
      seconds--;

      if (seconds < 0) {
        clearInterval(countdownInterval);
        display.textContent = "⏰ Time's up!";
        alert("⏰ Timer completed!");
      }
    }, 1000);
  } else {
    display.textContent = "Please enter a valid number!";
  }
}

// Random Quote Generator
const quotes = [
  "Dream big. Start small. Act now.",
  "Success is not final, failure is not fatal.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Do one thing every day that scares you.",
  "Your time is limited. Don’t waste it living someone else’s life."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteBox").textContent = quotes[randomIndex];
}
