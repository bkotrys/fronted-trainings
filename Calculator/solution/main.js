'use strict';

(function () {
	
	window.onload = function() {
    	// Operations
    	document.getElementById("back").addEventListener('click', back);
    	document.getElementById("division").addEventListener('click', division);
    	document.getElementById("multiplication").addEventListener('click', multiplication);
    	document.getElementById("subtraction").addEventListener('click', subtraction);
    	document.getElementById("addition").addEventListener('click', addition);
    	document.getElementById("delete").addEventListener('click', del);
    	document.getElementById("point").addEventListener('click', point);
    	document.getElementById("equal").addEventListener('click', equal);

    	//Numbers
    	document.getElementById("number-1").addEventListener('click', number1);
    	document.getElementById("number-2").addEventListener('click', number2);
    	document.getElementById("number-3").addEventListener('click', number3);
    	document.getElementById("number-4").addEventListener('click', number4);
    	document.getElementById("number-5").addEventListener('click', number5);
    	document.getElementById("number-6").addEventListener('click', number6);
    	document.getElementById("number-7").addEventListener('click', number7);
    	document.getElementById("number-8").addEventListener('click', number8);
    	document.getElementById("number-9").addEventListener('click', number9);
    	document.getElementById("number-0").addEventListener('click', number0);
  	}

  	//Operations
  	
  	/* 
  	function back(evt) {
  		console.log('back <');
  	}*/

  	function division(evt) {
  		display('/');
  	}

  	function multiplication(evt) {
  		display('*');
  	}

  	function subtraction(evt) {
  		display('-');
  	}

  	function addition(evt) {
  		display('+');
  	}

  	// Delete
  	function del(evt) {
  		clear();
  	}

  	/*
  	function point(evt) {
  		display(',');
  	}*/

  	function equal(evt) {
  		equal();
  	}

  	//Numbers
  	function number1(evt) {
  		display(1);
  	}

  	function number2(evt) {
  		display(2);
  	}

  	function number3(evt) {
  		display(3);
  	}

  	function number4(evt) {
  		display(4);
  	}

  	function number5(evt) {
  		display(5);
  	}

  	function number6(evt) {
  		display(6);
  	}

  	function number7(evt) {
  		display(7);
  	}

  	function number8(evt) {
  		display(8);
  	}

  	function number9(evt) {
  		display(9);
  	}
  	
  	function number0(evt) {
  		display(0);
  	}



  	var value1=0;
  	var value2=0;
  	var result=0;
  	var operation='';
    var displayField = document.getElementById("result");

  	function display(value) {

  		if (operation === '') {
  			if (value != 0 && value != 1 && value != 2 && value != 3 && value != 4 && value != 5 && value != 6 && value != 7 && value != 8 && value != 9) {
  				if(value1 != 0) {
	  				operation=value;
	  				//console.log('operation = '+operation);
	  				//return operation;
	  				displayField.innerText = displayField.innerText+operation;
  				}
  			} else {
  				value1 = (value1*10) + value;
  				//console.log('value1 = '+value1);
  				//return value1;
  				displayField.innerText = value1;
  			}
		} else {
			if (value != 0 && value != 1 && value != 2 && value != 3 && value != 4 && value != 5 && value != 6 && value != 7 && value != 8 && value != 9) {
  				operation=value;
  				//console.log('operation = '+operation);
  				//return operation;
  			} else {
  				value2 = (value2*10) + value;
  				//console.log('value2 = '+value2);
  				//return value2;
  				var value2String;
  				value2String = String(value2);
  				displayField.innerText = displayField.innerText + value2String.slice(-1);
  			}
  		}
	}

	function equal() {
		console.log('value1 = '+value1);
		console.log('value2 = '+value2);
		console.log('operation = '+operation);
		
		if (operation == '+') {
			result = value1 + value2;
			displayField.innerText = result;
		} else if (operation == '-') {
			result = value1 - value2;
			displayField.innerText = result;
		} else if (operation == '*') {
			result = value1 * value2;
			displayField.innerText = result;
		} else if (operation == '/') {
			result = value1 / value2;
			displayField.innerText = result;
		}
	}

	function clear() {
		value1=0;
  		value2=0;
  		result=0;
  		operation='';
  		displayField.innerText = '';
	}

})();