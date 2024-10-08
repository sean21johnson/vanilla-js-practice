/*
  -Form with an input field where users can type a task and a button to add the task to the list
  -Display the taks in a list below the input field
  -Each task should have a "Complete" button next to it.
    -When clicked, the task text should have a strikethrough to indicate it's completed
  -Delete tasks
    -Each task should also have a "Delete" button to remove it from the list
*/

// Select the body element where we will append everything
const body = document.querySelector("body");

// Create a container div
const container = document.createElement("div");
container.classList.add("container");

// Create a heading element
const heading = document.createElement("h1");
heading.textContent = "Todo List";

// Create a form element
const form = document.createElement("form");
form.id = "todoForm";

// Create an input field for task entry
const input = document.createElement("input");
input.type = "text";
input.id = "taskInput";
input.placeholder = "Enter a task";

// Create a button to add tasks
const addButton = document.createElement("button");
addButton.type = "submit";
addButton.textContent = "Add Task";

// Create an unordered list to hold tasks
const taskList = document.createElement("ul");
taskList.id = "taskList";

// Append the input and button to the form
form.appendChild(input);
form.appendChild(addButton);

// Append the form, heading, and task list to the container
container.appendChild(heading);
container.appendChild(form);
container.appendChild(taskList);

// Append the container to the body
body.appendChild(container);

// Event listener for the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  const taskText = input.value.trim(); // Get the input value and remove extra spaces

  if (taskText !== "") {
    addTask(taskText); // Call a function to add the task to the list
    input.value = ""; // Clear the input field
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create a "Complete" button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  // Create a "Delete" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Add the buttons to the list item
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // Add the list item to the task list
  taskList.appendChild(li);
}
