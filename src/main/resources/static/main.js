const toDoList = document.getElementById("todo-list");
const addTask = document.getElementById("addButton");
addTask.addEventListener("click", addList);
let inputField = document.getElementById("write");

function addList(){
    let cogerElemento = inputField.value;
    toDoList.innerHTML = cogerElemento;
}

