import $ from 'jquery';
import './../scss/styles.scss';

$(function initialize() {
	registerEvents();
});

function registerEvents() {
	$('#form').on("submit", addNewTask);
	$(document).on('click', '.button', onButtonClick);
}

function addNewTask(event) {
	event.preventDefault();

	const $form = $('#form');
	const newTaskValue = $form.find('input[name="task"]').val();
	const $todoList = $("#todo-list"); 
	const $newTodoElement = $("<li>");
	const $taskBtns = defineTaskButtons();
	const $taskValueInput = createTaskValueInput(newTaskValue);

	$newTodoElement
		.append($taskValueInput)
		.append($taskBtns)
		.appendTo($todoList);
	
	$form[0].reset();
} 

function createTaskValueInput(newTaskValue) {
	return $('<input>')
		.val(newTaskValue)
		.addClass('task-input')
		.attr('disabled', 'true');
}

function defineTaskButtons () {
	const $doneBtn = createButton('done', "fa-check-square-o");
	const $editBtn = createButton('edit', "fa-pencil-square-o");
	const $deleteBtn = createButton('delete', "fa-minus-square-o");

	return $("<div>")
		.append($doneBtn)
		.append($editBtn)
		.append($deleteBtn);
}

function createButton(type, iconClass, btnsContainer) {
	const $icon = createBtnIcon(iconClass);
	const $newBtn = $("<button>")
		.attr("type", "button")
		.addClass(`button ${type}-button`);

	return $newBtn
		.text(type)
		.append($icon)
}  

function createOkButton(event) {
	return $("<button>")
		.attr("type", "button")
		.addClass("button ok-button")
		.text('Ok');
}

function createBtnIcon(iconClass, $newBtn) {
	return $("<i>")
		.addClass(`fa ${iconClass}`)
		.attr("aria-hidden", "true")
}

function onButtonClick(event) {
  	const $btn = $(event.target);
  	
		if ($btn.hasClass("done-button")) {
  		onDone(event);
		} else if ($btn.hasClass("edit-button")) {
  		onEdit(event);
		} else if ($btn.hasClass("delete-button")) {
  		onDelete(event)
		} else if ($btn.hasClass("ok-button")) {
  		onOk(event);
  	}
}

function onDone(event) {
	const $task = $(event.target).parents('li');
	onDelete(event);
	createDoneElement($task);
}

function onEdit(event) {
	const $btn = $(event.target);
	const $editedElement = $btn.parents('li');
	const $inputToEdit = $editedElement.find('input');
	const $buttonsWrapper = $btn.parent();

	$buttonsWrapper.find("button").hide();
	$inputToEdit
		.removeAttr("disabled")
		.css({
			"background-color": "white",
			"maxlength": "40"
		});

	$buttonsWrapper.append(createOkButton());
}

function onOk(event) {
	const $btn = $(event.target);
	const $editedElement = $btn.parents('li');
	const $buttonsWrapper = $btn.parent();
	const $inputToEdit = $editedElement.find('input');

	$inputToEdit
		.attr("disabled", "true")
		.removeAttr("style");

	$buttonsWrapper.find("button").show();
	$btn.hide();
}

function onDelete(event) {
	const $btn = $(event.target);
	const $listElement = $btn.parents('li');
	$listElement.remove();
}

function createDoneElement($task) {
	const $doneList = $("#done-list");
	const $doneBtn = $task.find('.done-button');
	const $editBtn = $task.find('.edit-button');

	$doneBtn.hide();
	$editBtn.hide();
	$doneList.append($task);
}