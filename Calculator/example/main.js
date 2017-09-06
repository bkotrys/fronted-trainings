'use strict';

(function () {
	var resultField = document.getElementById("result");
	var numbers = [];
	var actions = [];
	var isNewNumber = true;

	window.onload = function registerEvents() {
		document.getElementById("delete").addEventListener('click', handleDelete);
		document.getElementById("equal").addEventListener('click', handleEqual);

		var calcFields = document.getElementsByClassName('calc-field');
		for (var i = 0; i < calcFields.length; i++) {
			calcFields[i].addEventListener('click', onCalculatedFieldClick);
		}
	}

	function displayCurrentExpression(value) {
		resultField.innerText = resultField.innerText + value;
	}

	function clear() {
		printCurrentStateinConsole();
		resultField.innerText = "";
	}

	function onCalculatedFieldClick(event) {
		var currentField = event.target;
		var isNumberField = currentField.classList.contains('number-field')
		var value = currentField.innerText;

		displayCurrentExpression(value);

		if (isNumberField) {
			handleNumberMark(value);
		} else {
			handleActionMark(value);
		}

		printCurrentStateinConsole();
	}

	function handleNumberMark(value) {
		if (isNewNumber) {
			numbers.push(value);
		} else {
			updateLastNumber(value);
		}

		isNewNumber = false;		
	}

	function updateLastNumber(value) {
		var lastIdx = numbers.length - 1;
		var lastNumber = numbers[lastIdx];
		var nextNumber = lastNumber + value;
		numbers[lastIdx] = nextNumber;
	}

	function handleActionMark(value) {
		actions.push(value);
		isNewNumber = true;
	}

	function handleDelete(event) {
		numbers.length = 0;
		actions.length = 0;
		clear();
		isNewNumber = true;
	}

	function handleEqual(event) {
		printCurrentStateinConsole();
	
		var result = calculateResult();
		clear();
		displayCurrentExpression(result);

		printCurrentStateinConsole();
	}

	function calculateResult() {
		var result = ""; 
		var higherPriorityActionIndex = findIndexOfActionWithHigerPriority();

		if (higherPriorityActionIndex !== null) {
			calculateFromGivenIndex(higherPriorityActionIndex);

			if(numbers.length === 1) {
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
		while(numbers.length > 1) {
			calculateFromGivenIndex(0);
		}

		return numbers[0];
	}

	function calculateFromGivenIndex(index) {
		var number1Index = index;
		var number2Index = index + 1;
		var number1 = parseFloat(numbers[number1Index]);
		var number2 = parseFloat(numbers[number2Index]);
		var operation = actions[index];
		var newNumber = simpleCalculate(number1, number2, operation);

		numbers[number1Index] = newNumber;
		removeElementFromList(numbers, number2Index);
		removeElementFromList(actions, index);
	}

	function removeElementFromList(list, index) {
		list.splice(index, 1)
	}

	function simpleCalculate(number1, number2, action) {
		var result = "";

		if (action == '+') {
			result = number1 + number2;
		} else if (action == '-') {
			result = number1 - number2;
		} else if (action == '*') {
			result = number1 * number2;
		} else if (action == ':') {
			result = number1 / number2;
		}

		return "" + result;
	}

	function findIndexOfActionWithHigerPriority() {
		var higherPriorityActionIndex = null;

		for (var i = 0; i < actions.length; i++) {
			var action = actions[i];
			if (action === '*' || action === ':') {
				higherPriorityActionIndex = i;
				break;
			}
		}

		return higherPriorityActionIndex;
	}

	// helper function which log in console current state
	function printCurrentStateinConsole() {
		console.log('numbers: ', numbers);
		console.log('actions: ', actions);
		console.log('------------------')
	}
})();
