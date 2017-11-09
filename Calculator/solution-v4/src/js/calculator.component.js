import $ from 'jquery';
import './../scss/styles.scss';

export default class Calculator {
  constructor() {
    this.resultField = $('#result');
    this.numbers = initalNumbers;
    this.actions = [];
    this.isNewNumber = true;
  }
  
  initialize() {
    this.registerEvents();
  }

  registerEvents() {
    $('#delete').on('click', this.handleDelete);
    $('#equal').on('click', this.handleEqual);
    $('#back').on('click', this.handleBack);
    $('.calc-field').on('click', this.onCalculatedFieldClick);
  }

  onCalculatedFieldClick(event) {
    let currentField = $(event.target);
    let isNumberField = currentField.hasClass('number-field');
    let value = currentField.text();

    this.displayCurrentExpression(value);

    if (isNumberField) {
      this.handleNumberMark(value);
    } else {
      this.handleActionMark(value);
    }

    this.printCurrentStateinConsole();
  }

  handleNumberMark(value) {
    if (this.isNewNumber) {
      this.numbers.push(value);
    } else {
      this.updateLastNumber(value);
    }

    this.isNewNumber = false;
  }

  handleBack(event) {
    if (this.isNewNumber) {
      actions.pop();
    } else {
      cutLastNumber();
    }
    resultField.text(resultField.text().slice(0, -1));
  }
}


function handleBack(event) {
  if (isNewNumber) {
    actions.pop();
  } else {
    cutLastNumber();
  }
  resultField.text(resultField.text().slice(0, -1));
}

function cutLastNumber() {
  let lastIndex = numbers.length - 1;
  let lastNumber = numbers[numbers.length - 1];

  if (lastNumber.length === 1) {
    numbers.pop();
  } else {
    lastNumber = lastNumber.slice(0, -1);
    numbers[lastIndex] = lastNumber;
  }
}

function handleActionMark(value) {
  if (isNewNumber == false) {
    actions.push(value);
    isNewNumber = true;
  } else {
    resultField.text(resultField.text().slice(0, -1));
  }
}

function handleDelete(event) {
  numbers.length = 0;
  actions.length = 0;
  clear();
  isNewNumber = true;
}

function handleEqual(event) {
  printCurrentStateinConsole();

  let result = calculateResult();
  clear();
  displayCurrentExpression(result);

  printCurrentStateinConsole();
}

function calculateResult() {
  let result = "";
  let higherPriorityActionIndex = findIndexOfActionWithHigerPriority();

  if (higherPriorityActionIndex !== null) {
    calculateFromGivenIndex(higherPriorityActionIndex);

    if (numbers.length === 1) {
      result = numbers[0];
    } else {
      return calculateResult();
    }
  } else {
    result = calculateCustomExpression();
  }

  return result;
}

function calculateCustomExpression() {
  while (numbers.length > 1) {
    calculateFromGivenIndex(0);
  }

  return numbers[0];
}

function calculateFromGivenIndex(index) {
  let number1Index = index;
  let number2Index = index + 1;
  let number1 = parseFloat(numbers[number1Index]);
  let number2 = parseFloat(numbers[number2Index]);
  let operation = actions[index];

  if (!isNaN(number1) && !isNaN(number2)) {
    let newNumber = simpleCalculate(number1, number2, operation);
    numbers[number1Index] = newNumber;
    removeElementFromList(numbers, number2Index);
  }

  removeElementFromList(actions, index);
}

function updateLastNumber(value) {
  let lastIdx = numbers.length - 1;
  let lastNumber = numbers[lastIdx];
  let nextNumber = lastNumber + value;
  numbers[lastIdx] = nextNumber;
}

function displayCurrentExpression(value) {
  console.log(resultField);
  resultField.text(resultField.text() + value);
}

function clear() {
  printCurrentStateinConsole();
  $('#result').text('');
}

function removeElementFromList(list, index) {
  list.splice(index, 1)
}

function simpleCalculate(number1, number2, action) {
  let result = "";

  if (action === '+') {
    result = number1 + number2;
  } else if (action === '-') {
    result = number1 - number2;
  } else if (action === '*') {
    result = number1 * number2;
  } else if (action === ':') {
    result = number1 / number2;
  }

  return "" + result;
}

function findIndexOfActionWithHigerPriority() {
  let higherPriorityActionIndex = null;

  for (let value of actions) {
    let action = actions[value];

    if (action === '*' || action === ':') {
      higherPriorityActionIndex = value;
      break;
    }
  }

  return higherPriorityActionIndex;
}

// helper function which log in console current state
function printCurrentStateinConsole() {
  console.log(`numbers: ${numbers}`);
  console.log(`actions: ${actions}`);
  console.log('------------------')
  console.log(`isNewNumber = ${isNewNumber}`);
}
