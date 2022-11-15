"use strict";

const calculate = (n1, op, n2) => {
  let result = "";
  if (op === "+") {
    result = n1 + n2;
  } else if (op === "-") {
    result = n1 - n2;
  } else if (op === "*") {
    result = n1 * n2;
  } else if (op === "/") {
    result = n1 / n2;
  }
  return result;
};

const initInput = () => {
  const firstNumber = parseFloat(prompt("Enter your first number: "));
  const secondNumber = parseFloat(prompt("Enter your second number: "));
  const operator = prompt("Enter your operator of choice: ");

  document.getElementById(
    "display"
  ).textContent = `${firstNumber} ${operator} ${secondNumber} = ${calculate(
    firstNumber,
    operator,
    secondNumber
  )}`;
};

document.getElementById("calculate_button").addEventListener("click", () => {
  initInput();
});
