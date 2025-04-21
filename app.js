function addTask(taskTextFromStorage = null, isCompleted = false) {
    let taskInput = document.getElementById("task-input");
    let taskText = taskTextFromStorage || taskInput.value.trim();
  
    if (taskText !== "") {
      // Create elements
      let taskItem = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = isCompleted;
  
      let taskTextElement = document.createElement("span");
      taskTextElement.textContent = taskText;
      if (isCompleted) {
        taskTextElement.classList.add("completed");
      }
  
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.classList.add("delete-btn");
  
      // Toggle completed
      checkbox.addEventListener("change", function () {
        taskTextElement.classList.toggle("completed");
        saveTasksToLocalStorage();
      });
  
      // Delete task
      deleteBtn.addEventListener("click", function () {
        taskItem.remove();
        saveTasksToLocalStorage();
      });
  
      // Append
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskTextElement);
      taskItem.appendChild(deleteBtn);
      document.getElementById("task-list").appendChild(taskItem);
  
      // Save and clear input
      if (!taskTextFromStorage) {
        saveTasksToLocalStorage();
        taskInput.value = "";
      }
    } else {
      alert("Please enter a task.");
    }
  }
  function saveTasksToLocalStorage() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach((li) => {
      let taskText = li.querySelector("span").textContent;
      let isCompleted = li.querySelector("input").checked;
      tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  window.onload = function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
      addTask(task.text, task.completed);
    });
  
    alert("Welcome back! Your saved tasks are loaded. ✅");
  };
window.onload = function () {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    addTask(task.text, task.completed);
  });

  alert("Welcome back! Your saved tasks are loaded. ✅");
};
  
  