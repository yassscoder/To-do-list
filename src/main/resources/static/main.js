const toDoList = document.getElementById("todo-list");
const addTask = document.getElementById("addButton");
let inputField = document.getElementById("write");

function addList(){
    let tareas = inputField.value;
    toDoList.innerHTML = tareas;
}

addTask.addEventListener("click", addList);

