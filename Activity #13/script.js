const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = { text: taskText, completed: false };
  tasks.push(task);
  saveAndRender();
  taskInput.value = "";
});

// Toggle complete / Delete
taskList.addEventListener("click", (e) => {
  const index = e.target.parentElement.dataset.index;

  if (e.target.classList.contains("delete-btn")) {
    tasks.splice(index, 1);
  } else {
    tasks[index].completed = !tasks[index].completed;
  }
  saveAndRender();
});

// Save tasks to Local Storage and render
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Render tasks to the page
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.dataset.index = i;
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      ${task.text} 
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
  });
}