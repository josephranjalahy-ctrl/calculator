// Basic calculator functions
let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// Elements needed for an operation
let firstNumber;
let operator;
let secondNumber;

// Operate function
function operate() {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return substract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return;
    }
}

// Elements needed for the display
let body = document.querySelector("body");
let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let div = document.createElement("div");
body.appendChild(div);

// Functions that populate the display
let number = digits.forEach(digit => {
  digit.addEventListener("click", () => {
    div.textContent += digit.textContent;
  });
});

let operation = operators.forEach(operator => {
    operator.addEventListener('click', () => {
        div.textContent += operator.textContent;
    });
});