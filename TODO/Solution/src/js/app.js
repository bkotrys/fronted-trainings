'use strict';

(function () {
	
	window.onload = function registerEvents() {
		
		//ADDING NEW LIST ELEMENT
		var form = document.getElementById('form');
		var elementIdCount = 0;
		var Buttons = new Array();

		form.onsubmit = function(event) {
			event.preventDefault();
			var newTaskValue = form.task.value;
			elementIdCount = elementIdCount+1;
			
			//UL
			var todoList = document.getElementById("todo-list");
				
				//LI
				var newTodoElement = document.createElement("li");
				newTodoElement.setAttribute("id", `done-todo-element-${elementIdCount}`);
					
					//BUTTONS DIV
					var newTodoElementButtonsDiv = document.createElement("div");
					newTodoElementButtonsDiv.setAttribute("id", `buttons-div-${elementIdCount}`);
						
						//DONE BUTTON
						var newTodoElementButtonDone = document.createElement("button");
						newTodoElementButtonDone.setAttribute("type", "button");
						newTodoElementButtonDone.setAttribute("class", "button done-button");
						newTodoElementButtonDone.setAttribute("id", `done-button-todo-element-${elementIdCount}`);
							
							//DONE ICON AND TEXT
							var doneIcon = document.createElement("i");
							doneIcon.setAttribute("class", "fa fa-check-square-o");
							doneIcon.setAttribute("aria-hidden", "true");
							newTodoElementButtonDone.appendChild(doneIcon);
							newTodoElementButtonDone.appendChild(document.createTextNode(" "));
							newTodoElementButtonDone.appendChild(document.createTextNode("Done"));
						
						//EDIT BUTTON
						var newTodoElementButtonEdit = document.createElement("button");
						newTodoElementButtonEdit.setAttribute("type", "button");
						newTodoElementButtonEdit.setAttribute("class", "button edit-button");
						newTodoElementButtonEdit.setAttribute("id", `edit-button-todo-element-${elementIdCount}`);
							
							//EDIT ICON AND TEXT
							var editIcon = document.createElement("i");
							editIcon.setAttribute("class","fa fa-pencil-square-o");
							editIcon.setAttribute("aria-hidden", "true");
							newTodoElementButtonEdit.appendChild(editIcon);
							newTodoElementButtonEdit.appendChild(document.createTextNode(" "));
							newTodoElementButtonEdit.appendChild(document.createTextNode("Edit"));

						//DELETE BUTTON
						var newTodoElementButtonDelete = document.createElement("button");
						newTodoElementButtonDelete.setAttribute("type", "button");
						newTodoElementButtonDelete.setAttribute("class", "button delete-button");
						newTodoElementButtonDelete.setAttribute("id", `delete-button-todo-element-${elementIdCount}`);
							
							//DELETE ICON AND TEXT
							var deleteIcon = document.createElement("i");
							deleteIcon.setAttribute("class", "fa fa-minus-square-o");
							deleteIcon.setAttribute("aria-hidden", "true");
							newTodoElementButtonDelete.appendChild(deleteIcon);
							newTodoElementButtonDelete.appendChild(document.createTextNode(' '));
							newTodoElementButtonDelete.appendChild(document.createTextNode('Delete'));

					//ADDING BUTTONS TO BUTTONS DIV
					newTodoElementButtonsDiv.appendChild(newTodoElementButtonDone);
					newTodoElementButtonsDiv.appendChild(newTodoElementButtonEdit);
					newTodoElementButtonsDiv.appendChild(newTodoElementButtonDelete);

				//ADDING TASK VALUE AND BUTTONS DIV
				newTodoElement.appendChild(document.createTextNode(newTaskValue));
				newTodoElement.appendChild(newTodoElementButtonsDiv);
			//ADDING ELEMENT TO LIST
			todoList.appendChild(newTodoElement);
			
			form.reset();
			
			//console.log(elementIdCount);
			
			Buttons[elementIdCount-1] = new Array(2);
			Buttons[elementIdCount-1][0] = document.getElementById(`done-button-todo-element-${elementIdCount}`);
			Buttons[elementIdCount-1][1] = document.getElementById(`edit-button-todo-element-${elementIdCount}`);
			Buttons[elementIdCount-1][2] = document.getElementById(`delete-button-todo-element-${elementIdCount}`);
			
			//console.log(Buttons);
			
			Buttons[elementIdCount-1][0].addEventListener('click', function(event){
				var id = event.target.id;
				var idNumeric = id.replace( /^\D+/g, '');
				onClick("Done", idNumeric);
			});

			Buttons[elementIdCount-1][1].addEventListener('click', function(event){
				var id = event.target.id;
				var idNumeric = id.replace( /^\D+/g, '');
				onClick("Edit", idNumeric);
			});

			Buttons[elementIdCount-1][2].addEventListener('click', function(event){
				var id = event.target.id;
				var idNumeric = id.replace( /^\D+/g, '');
				onClick("Delete", idNumeric);
			});

		} //END OF ADDING NEW LIST ELEMENT		
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

	

})();