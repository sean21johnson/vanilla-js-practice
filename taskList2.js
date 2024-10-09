/*
  -Form with an input field where users can type a task and a button to add the task to the list
  -Display the taks in a list below the input field
  -Each task should have a "Complete" button next to it.
    -When clicked, the task text should have a strikethrough to indicate it's completed
  -Delete tasks
    -Each task should also have a "Delete" button to remove it from the list
*/

/*
  -Target and create elements
  -We will need:
    -Target the body
    -Create a heading element
    -Create a form element
    -Create an input element
    -Create a button element to submit the form
    -Create an unordered list (when elements are added they'll be added as list items to that list)
    -NOTE: the task list items will be created within an event listener function and added to the task list
      -Same goes for the complete and delete buttons
*/
const body = document.querySelector("body");
const heading = document.createElement("h1");
const form = document.createElement("form");
const input = document.createElement("input");
const submitButton = document.createElement("button");
const taskList = document.createElement("ul");

/*
  -Add necessary attributes and text content
  -What we need:
    -Give the heading some text
    -Give the heading some margin
    -Give the input a type of text
    -Give the input a placeholder
    -Give the button a submit type
    -Give the input and button some styling if needed for spacing
    -Give the task list some styling for spacing if needed
*/
heading.textContent = "TODO List";
input.type = "text";
input.placeholder = "Enter task";
submitButton.type = "submit";
submitButton.textContent = "Submit";

/*
  -Attach elements to the body and to each other
  -What we need:
    -Add the input and submit button to the form as child elements
    -Add the heading to the body
    -Add the form to the body
    -Add the taskList to the body
*/
form.appendChild(input);
form.appendChild(submitButton);
body.appendChild(heading);
body.appendChild(form);
body.appendChild(taskList);

/*
  -Create a function for completing an item
  -Pass in the event object
  -Target the parent element of what was clicked (which will be the encompassing li element)
  -Find the span element within it
  -Add a strikethrough style to it
*/
function handleCompleteTask(event) {
  const parentElement = event.target.parentElement;

  const spanElement = parentElement.querySelector("span");

  spanElement.style.textDecoration = "line-through";
}

/*
  -Create a function for deleting an item
  -Pass in the event object
  -Target the parent element of what was clicked (which will be the encompassing li element)
  -Do taskList.removeChild() and pass in the element to remove
*/
function handleDeleteTask(event) {
  const parentElement = event.target.parentElement;

  taskList.removeChild(parentElement);
}

/*
  -Create function for handling the submit event
  -What we need:
    -Pass in the event object
    -event.preventDefault() to prevent the default behavior
    -Get the value from the input element and trim it
    -Create a new li element
    -Within the li element:
      -Add the value to a span
      -Create a complete button
      -Create a delete button
    -Add the new li element to the task list after giving it the necessary text content
    -Add event listeners on the complete and delete button
      -Create separate functions for handling complete and delete clicks
*/
function handleSubmit(event) {
  event.preventDefault();

  const newTaskName = input.value.trim();

  const newTaskItem = document.createElement("li");
  const newTaskItemName = document.createElement("span");
  const newTaskCompletedButton = document.createElement("button");
  const newTaskDeleteButton = document.createElement("button");

  newTaskItemName.textContent = newTaskName;
  newTaskCompletedButton.textContent = "Completed";
  newTaskDeleteButton.textContent = "Delete";

  newTaskCompletedButton.addEventListener("click", handleCompleteTask);
  newTaskDeleteButton.addEventListener("click", handleDeleteTask);

  newTaskItem.appendChild(newTaskItemName);
  newTaskItem.appendChild(newTaskCompletedButton);
  newTaskItem.appendChild(newTaskDeleteButton);

  taskList.appendChild(newTaskItem);

  input.value = "";
}

/*
  -Add event listeners
    -What we need
    -A submit event listener attached to the form
*/
form.addEventListener("submit", handleSubmit);
