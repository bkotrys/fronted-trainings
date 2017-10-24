import $ from 'jquery';

export default class TODO {
  constructor() {
    this.$form = $('#form');
    this.$todoList = $("#todo-list");
    this.$doneList = $("#done-list");
  }

  initialize() {
    this.registerEvents();
  }

  registerEvents() {
    this.$form.on("submit", (event) => this.onSubmitForm(event));
    $(document).on('click', '.button', (event) => this.onButtonClick(event));
  }

  onSubmitForm(event) {
    event.preventDefault();
    this.addNewTask(event);
  }

  onButtonClick(event) {
    const $btn = $(event.target);

    if ($btn.hasClass("done-button")) {
      this.doneTask(event);
    } else if ($btn.hasClass("edit-button")) {
      this.editTask(event);
    } else if ($btn.hasClass("delete-button")) {
      this.deleteTask(event)
    } else if ($btn.hasClass("ok-button")) {
      this.saveEditedTask(event);
    }
  }

  doneTask(event) {
    const $task = $(event.target).parents('li');
    this.deleteTask(event);
    this.createDoneElement($task);
  }

  editTask(event) {
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

    $buttonsWrapper.append(TODO.createOkButton());
  }

  deleteTask(event) {
    const $btn = $(event.target);
    const $listElement = $btn.parents('li');
    $listElement.remove();
  }

  saveEditedTask(event) {
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

  addNewTask(event) {
    const newTaskValue = this.$form.find('input[name="task"]').val();
    const $newTodoElement = $("<li>");
    const $taskBtns = TODO.defineTaskButtons();
    const $taskValueInput = TODO.createTaskValueInput(newTaskValue);

    $newTodoElement
      .append($taskValueInput)
      .append($taskBtns)
      .appendTo(this.$todoList);

    this.$form[0].reset();
  }

  createDoneElement($task) {
    const $doneBtn = $task.find('.done-button');
    const $editBtn = $task.find('.edit-button');

    $doneBtn.hide();
    $editBtn.hide();
    this.$doneList.append($task);
  }

  static defineTaskButtons() {
    const $doneBtn = TODO.createButton('done', "fa-check-square-o");
    const $editBtn = TODO.createButton('edit', "fa-pencil-square-o");
    const $deleteBtn = TODO.createButton('delete', "fa-minus-square-o");

    return $("<div>")
      .append($doneBtn)
      .append($editBtn)
      .append($deleteBtn);
  }

  static createButton(type, iconClass) {
    const $icon = TODO.createBtnIcon(iconClass);
    const $newBtn = $("<button>")
      .attr("type", "button")
      .addClass(`button ${type}-button`);

    return $newBtn
      .text(type)
      .append($icon)
  }

  static createOkButton(event) {
    return $("<button>")
      .attr("type", "button")
      .addClass("button ok-button")
      .text('Ok');
  }

  static createBtnIcon(iconClass) {
    return $("<i>")
      .addClass(`fa ${iconClass}`)
      .attr("aria-hidden", "true")
  }

  static createTaskValueInput(newTaskValue) {
    return $('<input>')
      .val(newTaskValue)
      .addClass('task-input')
      .attr('disabled', 'true');
  }
}
