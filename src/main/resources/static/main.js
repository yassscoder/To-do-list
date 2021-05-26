

//    toDoList.innerHTML = tareas;
//}
//addTask.addEventListener("click", addList);
//let tareas = inputField.value;

//${task.write_task}
const toDoList = document.getElementById("todo-list");
const btn =document.getElementById("addButton");

function showTasks(tasks) {
    toDoList.innerHTML="";

        for(let [location, task] of Object.entries(tasks)){
        if (task.name.length>2) {
            const new_div = document.createElement("div");
            new_div.innerHTML = `<div class="task">
                <div 
                class="close-button" 
                onclick="fetch(\` /blocks/${location}\`,
                { method: 'DELETE'}).then(reloadTasks)"><div class="task-button"></div></div>
              <p class="task_name">${task.name}</p>
           </div>`;

            toDoList.appendChild(new_div)
        }
        else {
                //alert("Has de poner al menos 3 caracteres");
        }

    }
}

let reloadTasks = () =>{
    fetch("/blocks")
        .then(r => r.json())
        .then(showTasks)
};

document.addEventListener("DOMContentLoaded", reloadTasks)
