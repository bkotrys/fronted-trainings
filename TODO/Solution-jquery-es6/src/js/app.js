import $ from 'jquery';
import TODO from './todo';
import './../scss/styles.scss';

$(function () {
	const todoList = new TODO();
	todoList.initialize();
});