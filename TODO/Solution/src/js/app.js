var elementIdCount = 0;
var buttons = new Array();
	
window.onload = function initialize() {
	registerEvents();		
}

function registerEvents() {
	var form = document.getElementById('form');
	form.addEventListener("submit", addNewTask)
}

function addNewTask (event) {
	event.preventDefault();

	var newTaskValue = form.task.value;
	var todoList = document.getElementById("todo-list");
	var newTodoElement = document.createElement("li");

	elementIdCount = elementIdCount + 1;
	newTodoElement.setAttribute("id", `done-todo-element-${elementIdCount}`);
	defineTaskButtons();

	//ADDING TASK VALUE AND BUTTONS DIV
	newTodoElement.appendChild(document.createTextNode(newTaskValue));
	newTodoElement.appendChild(newTodoElementButtonsDiv);
	//ADDING ELEMENT TO LIST
	todoList.appendChild(newTodoElement);

	form.reset();

	//console.log(elementIdCount);

	buttons[elementIdCount - 1] = new Array(2);
	buttons[elementIdCount - 1][0] = document.getElementById(`done-button-todo-element-${elementIdCount}`);
	buttons[elementIdCount - 1][1] = document.getElementById(`edit-button-todo-element-${elementIdCount}`);
	buttons[elementIdCount - 1][2] = document.getElementById(`delete-button-todo-element-${elementIdCount}`);

	//console.log(Buttons);

	buttons[elementIdCount - 1][0].addEventListener('click', function (event) {
		var id = event.target.id;
		var idNumeric = id.replace(/^\D+/g, '');
		onClick("Done", idNumeric);
	});

	buttons[elementIdCount - 1][1].addEventListener('click', function (event) {
		var id = event.target.id;
		var idNumeric = id.replace(/^\D+/g, '');
		onClick("Edit", idNumeric);
	});

	buttons[elementIdCount - 1][2].addEventListener('click', function (event) {
		var id = event.target.id;
		var idNumeric = id.replace(/^\D+/g, '');
		onClick("Delete", idNumeric);
	});

} 

function defineTaskButtons () {
	//BUTTONS DIV
	var newTodoElementButtonsDiv = document.createElement("div");
	newTodoElementButtonsDiv.setAttribute("id", `buttons-div-${elementIdCount}`);

	createButton('done', "fa-check-square-o");
	createButton('edit', "fa-pencil-square-o");
	createButton('delete', "fa-minus-square-o");
}

function createButton(type, iconClass) {
	var newBtnWrapper = document.createElement("div");
	newBtnWrapper.setAttribute("id", `buttons-div-${elementIdCount}`);

	var newBtn = document.createElement("button");
	newBtn.setAttribute("type", "button");
	newBtn.setAttribute("class", `button ${type}-button`);
	newBtn.setAttribute("id", `${type}-button-todo-element-${elementIdCount}`);

	createBtnIcon(iconClass);
	newBtn.appendChild(document.createTextNode(type));
	newBtnWrapper.appendChild(newBtn);
}

function createBtnIcon(iconClass) {
	var doneIcon = document.createElement("i");
	doneIcon.setAttribute("class", `fa ${iconClass}`);
	doneIcon.setAttribute("aria-hidden", "true");
	newTodoElementButtonDone.appendChild(doneIcon);
}

function onClick (type, id) {
	if (type === "Done") {
		taskDone(id);
	} else if (type === "Edit") {
		taskEdit(id);
	} else if (type === "Delete") {
		taskDelete(id);
	} else {
		location.reload();
		return 0;
	}
}

function taskDone(id) {
	console.log(`Task id ${id} is DONE, it will be moved to DONE list`);
	
	var doneChild = document.getElementById(`done-todo-element-${id}`);
	var doneParent = document.getElementById('done-list');
	doneParent.appendChild(doneChild);

	var buttonsParent = document.getElementById(`buttons-div-${id}`);
	var doneButtonDone = document.getElementById(`done-button-todo-element-${id}`);
	var doneButtonEdit = document.getElementById(`edit-button-todo-element-${id}`);

	buttonsParent.removeChild(doneButtonDone);
	buttonsParent.removeChild(doneButtonEdit);

	doneChild.setAttribute("id", `done-task-${id}`);
}

function taskEdit(id) {
	console.log(`You will be able to edit your task id ${id}`);
	
}

function taskDelete(id) {
	console.log(`Task id ${id} will be deleted`);

	var isItDone = document.getElementById(`done-task-${id}`);
	
	if (isItDone) {
		var parent = document.getElementById('done-list');
		var child = document.getElementById(`done-task-${id}`);
	} else {
		var parent = document.getElementById('todo-list');
		var child = document.getElementById(`done-todo-element-${id}`);
	}

	
	parent.removeChild(child);
}
