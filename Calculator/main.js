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
  	function back(evt) {
  		console.log('back <');
  	}

  	function division(evt) {
  		display('\\');
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
  		display('cls');
  	}

  	function point(evt) {
  		display(',');
  	}

  	function equal(evt) {
  		console.log('equal =');
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

  	function display(value) {
  		var test = document.getElementById("result");
  		
  		if (value !== 'cls') {
  			test.innerText = test.innerText + value;
  		} else {
  			test.innerText = '';
  		}
  	}
})();