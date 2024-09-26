const tasksContainer = document.querySelector(".tasks");
const addTaskButton = document.querySelector(".newTask button");
const taskInput = document.querySelector(".newTask input");
const delButton = document.querySelectorAll(".task button");

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") 
    return;
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML = `
        <span>${taskText}</span>
        <button><i class="fa-solid fa-trash"></i></button>
    `;
  tasksContainer.appendChild(newTask);
  taskInput.value = "";
};

addTaskButton.addEventListener("click", addTask);

tasksContainer.addEventListener("click", (e) => {
    let targetElement = null
    if (e.target.tagName == 'button') {
        targetElement = e.target;
    } else if (e.target.tagName == 'i') {
        targetElement = e.target.parentElement
    } else {
        return
    }
    const taskToRemove = targetElement.parentElement;
    tasksContainer.removeChild(taskToRemove);
})
