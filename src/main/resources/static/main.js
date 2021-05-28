
const toDoList = document.getElementById("todo-list");
const btn =document.getElementById("addButton");

function showTasks(tasks) {
    toDoList.innerHTML="";
        for(let [location, task] of Object.entries(tasks)){

                const new_div = document.createElement("div");
                new_div.innerHTML = `<div class="task">
                    <div class="close-button" onclick="fetch(\` /blocks/${location}\`,
                { method: 'DELETE'}).then(reloadTasks)"><div class="task-button"></div></div>
                    <p class="task_name">${task.name}</p>
                </div>`;

                 toDoList.appendChild(new_div)


        }
    }

const addedTask=document.getElementById("name");
function validation() {
    const inputField = addedTask.value;
    if (inputField.length>2){
        btn.disabled = false;
    }
    else {
        btn.disabled = true;

    }
}
addedTask.addEventListener("change", validation);
//se puede usar "input"/"change"

let reloadTasks = () =>{
    fetch("/blocks")
        .then(r => r.json())
        .then(showTasks)
};

document.addEventListener("DOMContentLoaded", reloadTasks)
