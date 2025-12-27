// Basic calculator functions
let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// Elements needed for an operation
let firstNumber = "";
let operator = null;
let secondNumber = "";

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
let operators = document.querySelectorAll(".normal.operator");
let equal = document.querySelector(".final.operator");
let div = document.createElement("div");
body.appendChild(div);

// Functions that populate the display
digits.forEach(digit => {
  digit.addEventListener("click", () => {
    if (operator === null) {
      firstNumber += digit.textContent;
      div.textContent = firstNumber;
    } else {
      secondNumber += digit.textContent;
      div.textContent = secondNumber;
    }
  });
});

operators.forEach(op => {
  op.addEventListener("click", () => {
    operator = op.textContent;
    div.textContent = operator;
  });
});

// Making the calculation
equal.addEventListener('click', () => {
    if (firstNumber !== "" && secondNumber !== "" && operator !== null) {
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        div.textContent = operate();
    }
})