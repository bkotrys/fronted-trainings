import $ from 'jquery';
import Calculator from './calculator.component';
import './../scss/styles.scss';

$(function () {
	const calculator = new Calculator();
	calculator.initialize();
});