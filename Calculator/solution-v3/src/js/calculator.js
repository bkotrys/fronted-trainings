import $ from 'jquery';
import './../scss/styles.scss';

export default class Calculator {
	constructor() {
		this.resultField = $('#result');
		// this.numbers = initalNumbers;
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
		const currentField = $(event.target);
		const isNumberField = currentField.hasClass('number-field');
		const value = currentField.text();

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

	handleBack() {
		if (this.isNewNumber) {
			this.actions.pop();
		} else {
			this.cutLastNumber();
		}
		this.resultField.text(this.resultField.text().slice(0, -1));
	}

	cutLastNumber() {
		const lastIndex = this.numbers.length - 1;
		let lastNumber = this.numbers[this.numbers.length - 1];

		if (lastNumber.length === 1) {
			this.numbers.pop();
		} else {
			lastNumber = lastNumber.slice(0, -1);
			this.numbers[lastIndex] = lastNumber;
		}
	}

	handleActionMark(value) {
		if (this.isNewNumber === false) {
			this.actions.push(value);
			this.isNewNumber = true;
		} else {
			this.resultField.text(this.resultField.text().slice(0, -1));
		}
	}

	handleDelete() {
		this.numbers.length = 0;
		this.actions.length = 0;
		this.clear();
		this.isNewNumber = true;
	}

	handleEqual() {
		this.printCurrentStateinConsole();

		const result = this.calculateResult();
		this.clear();
		this.displayCurrentExpression(result);

		this.printCurrentStateinConsole();
	}

	calculateResult() {
		let result = '';
		const higherPriorityActionIndex = this.findIndexOfActionWithHigerPriority();

		if (higherPriorityActionIndex !== null) {
			this.calculateFromGivenIndex(higherPriorityActionIndex);

			if (this.numbers.length === 1) {
				[result] = this.numbers;
			} else {
				return this.calculateResult();
			}
		} else {
			result = this.calculateCustomExpression();
		}

		return result;
	}

	calculateCustomExpression() {
		while (this.numbers.length > 1) {
			this.calculateFromGivenIndex(0);
		}

		return this.numbers[0];
	}

	calculateFromGivenIndex(index) {
		const number1Index = index;
		const number2Index = index + 1;
		const number1 = this.parseFloat(this.numbers[number1Index]);
		const number2 = this.parseFloat(this.numbers[number2Index]);
		const operation = this.actions[index];

		if (!isNaN(number1) && !isNaN(number2)) {
			const newNumber = this.simpleCalculate(number1, number2, operation);
			this.numbers[number1Index] = newNumber;
			this.removeElementFromList(this.numbers, number2Index);
		}

		this.removeElementFromList(this.actions, index);
	}

	updateLastNumber(value) {
		const lastIdx = this.numbers.length - 1;
		const lastNumber = this.numbers[lastIdx];
		const nextNumber = lastNumber + value;
		this.numbers[lastIdx] = nextNumber;
	}

	displayCurrentExpression(value) {
		console.log(this.resultField);
		this.resultField.text(this.resultField.text() + value);
	}

	clear() {
		this.printCurrentStateinConsole();
		$('#result').text('');
	}

	removeElementFromList(list, index) {
		this.list.splice(index, 1);
	}

	simpleCalculate(number1, number2, action) {
		let result = '';

		if (action === '+') {
			result = number1 + number2;
		} else if (action === '-') {
			result = number1 - number2;
		} else if (action === '*') {
			result = number1 * number2;
		} else if (action === ':') {
			result = number1 / number2;
		}

		return `${result}`;
	}

	findIndexOfActionWithHigerPriority() {
		let higherPriorityActionIndex = null;

		for (const value of this.actions) {
			const action = this.actions[value];

			if (action === '*' || action === ':') {
				higherPriorityActionIndex = value;
				break;
			}
		}

		return higherPriorityActionIndex;
	}

	// helper function which log in console current state
	printCurrentStateinConsole() {
		console.log(`numbers: ${this.numbers}`);
		console.log(`actions: ${this.actions}`);
		console.log('------------------');
		console.log(`isNewNumber = ${this.isNewNumber}`);
	}
}
