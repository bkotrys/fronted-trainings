window.onload = function initialize() {
	registerEvents();		
}

function registerEvents() {
	var form = document.getElementById('form');
	form.addEventListener("submit", addNewTask);
}

function registerNewButtons() {
	var buttons = document.getElementsByClassName("button");

	for (var i = 0; i < buttons.length; i++) {
    	buttons[i].addEventListener('click', onButtonClick);
	}
}

function addNewTask(event) {
	event.preventDefault();

	var newTaskValue = form.task.value;
	var todoList = document.getElementById("todo-list");
	var newTodoElement = document.createElement("li");
	var taskBtns = defineTaskButtons();
	var taskValueInput = createTaskValueInput(newTaskValue);

	newTodoElement.appendChild(taskValueInput);
	newTodoElement.appendChild(taskBtns);
	
	todoList.appendChild(newTodoElement);

	form.reset();
	registerNewButtons();
} 

function createTaskValueInput(newTaskValue) {
	var input = document.createElement("Input");
	input.setAttribute("class", "task-input");
	input.setAttribute("value", newTaskValue);
	input.setAttribute("disabled", "true");
	return input;
}

function defineTaskButtons () {
	var taskBtns = document.createElement("div");

	createButton('Done', "fa-check-square-o", taskBtns);
	createButton('Edit', "fa-pencil-square-o", taskBtns);
	createButton('Delete', "fa-minus-square-o", taskBtns);

	return taskBtns;
}

function createButton(type, iconClass, btnsContainer) {
	var newBtn = document.createElement("button");
	newBtn.setAttribute("type", "button");
	newBtn.setAttribute("class", `button ${type}-button`);

	createBtnIcon(iconClass, newBtn);
	newBtn.appendChild(document.createTextNode(`\xa0${type}`));
	btnsContainer.appendChild(newBtn);
}

function createBtnIcon(iconClass, newBtn) {
	var icon = document.createElement("i");
	icon.setAttribute("class", `fa ${iconClass}`);
	icon.setAttribute("aria-hidden", "true");
	newBtn.appendChild(icon); 
}

function onButtonClick(event) {
  	var actionType = event.target.classList[1];
  	
  	if (actionType === "Done-button") {
  		onDone(event);
  	} else if (actionType === "Edit-button") {
  		onEdit(event);
  	} else if (actionType === "Delete-button") {
  		onDelete(event)
  	} else if (actionType === "Ok-button") {
  		onOk(event);
  	}
}

function onDone(event) {
	var task = event.target.parentElement.parentElement;
	onDelete(event);
	createDoneElement(task);
}

function onEdit(event) {
	var editedElement = event.target.parentElement.parentElement;
	var inputToEdit = event.target.parentElement.parentElement.firstChild;
	var buttonsDiv = event.target.parentElement;

	buttonsDiv.setAttribute("style", "display: none");
	inputToEdit.removeAttribute("disabled");
	inputToEdit.setAttribute("style", "background-color: white");
	inputToEdit.setAttribute("maxlength", "40");
	var okButton = createOkButton();
	editedElement.appendChild(okButton);
	registerNewButtons();
}

function createOkButton(event) {
	var okButton = document.createElement("button");
	okButton.setAttribute("type", "button");
	okButton.setAttribute("class", "button Ok-button");
	okButton.appendChild(document.createTextNode('Ok'));
	return okButton;
}

function onOk(event) {
	var editedElement = event.target.parentElement;
	var inputToEdit = event.target.parentElement.firstChild;
	var buttonsDiv = event.target.parentElement.children[1];

	inputToEdit.setAttribute("disabled", "true");
	inputToEdit.removeAttribute("style");
	buttonsDiv.removeAttribute("style");
	editedElement.removeChild(editedElement.lastChild);
}

function onDelete(event) {
	var list = event.target.parentElement.parentElement.parentElement;
	var listElement = event.target.parentElement.parentElement;
	list.removeChild(listElement);
}

function createDoneElement(task) {
	var doneList = document.getElementById("done-list");
	var doneElement = task;
	doneList.appendChild(task);
	var buttonsDiv = task.lastChild;
	buttonsDiv.removeChild(buttonsDiv.firstChild);
	buttonsDiv.removeChild(buttonsDiv.firstChild);
}