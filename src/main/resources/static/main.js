

//    toDoList.innerHTML = tareas;
//}
//addTask.addEventListener("click", addList);
//let tareas = inputField.value;

//${task.write_task}
const toDoList = document.getElementById("todo-list");

function showTasks(tasks) {
    toDoList.innerHTML="";
    tasks.forEach(task => {    //task,position later
        const new_div= document.createElement("div");
        new_div.innerHTML = `<div class="task">
                
              <p class="task_name">${task.name}</p>
           </div>`;

        toDoList.appendChild(new_div)

    
    })
}

let reloadTasks = () =>{
    fetch("/blocks")
        .then(r => r.json())
        .then(showTasks)
};

document.addEventListener("DOMContentLoaded", reloadTasks)
