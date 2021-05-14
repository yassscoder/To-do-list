const toDoList = document.getElementById("todo-list");
const addTask = document.getElementById("addButton");
addTask.addEventListener("click", addList);
let inputField = document.getElementById("write");

function addList(event){
         toDoList.innerHTML = event.target.value;
}

console.log([toDoList])