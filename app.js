function addTask() {
    // Get the input value
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();
  
    // Check if the input is not empty
    if (taskText !== "") {
      // Create a new <li> element
      let taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      // Add the new task to the task list
      document.getElementById("task-list").appendChild(taskItem);
  
      // Clear the input field
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  }
  