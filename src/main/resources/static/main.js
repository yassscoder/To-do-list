const toDoList = document.getElementById("todo-list");
const addTask = document.getElementById("addButton");
addTask.addEventListener("click", addList);
let inputField = document.getElementById("write");

function addList(){
    let tareas = inputField.value;
    toDoList.innerHTML = tareas;
}

