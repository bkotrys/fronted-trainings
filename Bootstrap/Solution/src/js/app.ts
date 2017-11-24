import './../scss/styles.scss';
import $ from 'jquery';
import PasswordManager from './password-manager';

$(function () {
	const passwordManager = new PasswordManager();
	passwordManager.initialize();
});
