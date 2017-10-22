var array = newArray();
var form = document.getElementById('form');
form.addEventListener("submit", addValue);

console.log(array);

function newArray() {
	var numbers = new Array;

	for (var i=0; i < 100; i++){
		var number = Math.floor((Math.random() * 500) + 1);
		numbers.push(number);
	}
	return numbers;
}

function addValue(event) {
	event.preventDefault();
	var value = form.task.value;
	form.reset();
	checkValue(value);
}

function checkValue(x) {
	var number = parseInt(x)
	var isInArray = array.indexOf(number);

	if (isInArray === -1) {
		console.log(`There is no number ${number} in this array!`);
	} else {
		console.log(`Number ${number} is in this array (index ${isInArray}).`);
	}

}
