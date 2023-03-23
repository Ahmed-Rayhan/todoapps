let tasks = [];

let counter = 1;

function addTask() {
  const input = document.getElementById("input");
  const task = input.value;
  if (task !== "") {
    tasks.push({text: counter + ". " + task, done: false});
    counter++;
    input.value = "";
    renderTasks();
  }
}


function renderTasks() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(task.text));
    if (task.done) {
      li.classList.add("done");
    }
    const doneButton = document.createElement("button");
    doneButton.appendChild(document.createTextNode("Done"));
    doneButton.classList.add("done-button");
    doneButton.addEventListener("click", function() {
      task.done = true;
      li.classList.add("done");
    });
    li.appendChild(doneButton);
    list.appendChild(li);
  }
}

// Add a listener for the "Enter" key
document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    addTask();
    
  }
});

renderTasks();
