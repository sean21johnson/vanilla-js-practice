/*
  -Form with an input field where users can type a task and a button to add the task to the list
  -Display the taks in a list below the input field
  -Each task should have a "Complete" button next to it.
    -When clicked, the task text should have a strikethrough to indicate it's completed
  -Delete tasks
    -Each task should also have a "Delete" button to remove it from the list
*/

// Target the body
const body = document.querySelector("body");

// Create elements for the page
const container = document.createElement("div");
const header = document.createElement("h1");
const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");
const submitButton = document.createElement("button");
const taskList = document.createElement("ul");

// Add text content
header.textContent = "TODO List";
submitButton.textContent = "Submit";
label.textContent = "Add task";

// Add attributes
input.placeholder = "Enter task";
submitButton.type = "submit";
label.name = "task";
input.name = "task";

// Add classes
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.marginBottom = "15px";
container.style.width = "400px";
header.style.marginBottom = "25px";
label.style.marginBottom = "5px";
input.style.marginBottom = "10px";

// Append elements
form.appendChild(label);
form.appendChild(input);
form.appendChild(submitButton);
container.appendChild(header);
container.appendChild(form);
container.appendChild(taskList);
body.appendChild(container);

function completeTask(e) {
  const taskItem = e.target.parentElement;
  const taskNameElement = taskItem.querySelector("span");

  taskNameElement.style.textDecoration = "line-through";
}

function deleteTask(e) {
  const taskItem = e.target.parentElement;
  taskList.removeChild(taskItem);
}

function handleSubmit(e) {
  e.preventDefault();

  const newTaskName = input.value.trim();

  const itemElement = document.createElement("li");

  const nameElement = document.createElement("span");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  completeButton.textContent = "Complete";
  deleteButton.textContent = "Delete";

  completeButton.addEventListener("click", completeTask);
  deleteButton.addEventListener("click", deleteTask);

  nameElement.textContent = newTaskName;

  itemElement.appendChild(nameElement);
  itemElement.appendChild(completeButton);
  itemElement.appendChild(deleteButton);

  taskList.appendChild(itemElement);

  input.value = "";
}

// Event listeners
form.addEventListener("submit", handleSubmit);
