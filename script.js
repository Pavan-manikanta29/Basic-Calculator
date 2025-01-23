let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
  const result = document.getElementById('result');
  if (result.value === '0') {
    result.value = number;
  } else {
    result.value += number;
  }
}

function setOperation(op) {
  const result = document.getElementById('result');
  previousInput = result.value;
  operation = op;
  result.value = '0';
}

function calculate() {
  const result = document.getElementById('result');
  const currentNumber = parseFloat(result.value);
  const previousNumber = parseFloat(previousInput);

  if (operation === '+') {
    result.value = previousNumber + currentNumber;
  } else if (operation === '-') {
    result.value = previousNumber - currentNumber;
  } else if (operation === '*') {
    result.value = previousNumber * currentNumber;
  } else if (operation === '/') {
    result.value = currentNumber !== 0 ? previousNumber / currentNumber : 'Error';
  }

  operation = null;
  currentInput = '';
}

function clearDisplay() {
  const result = document.getElementById('result');
  result.value = '0';
  currentInput = '';
  operation = null;
  previousInput = '';
}
