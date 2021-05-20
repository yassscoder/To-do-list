const toDoList = document.getElementById("todo-list");
const addTask = document.getElementById("addButton");
let inputField = document.getElementById("write");

//function addList(){

//    toDoList.innerHTML = tareas;

//}

//addTask.addEventListener("click", addList);
//let tareas = inputField.value;
const moviesSection = document.querySelector("#movies-section");
function showTask(list) {
    Section.innerHTML = "";
    movies.forEach((movie, position) => {
        const htmlElement = document.createElement("div");
        htmlElement.innerHTML = `<div class="movie">
            <div 
                class="close-button" 
                onclick="fetch(\`/movies/${position}\`, { method: 'DELETE'}).then(reloadMovies)">x</div>
            <p class="title">${movie.title} (${movie.year})</p>
        </div>`;
        moviesSection.appendChild(htmlElement)
    })
}



}
let reloadTasks = () =>{
    fetch("/blocks")
        .then(r => r.json())
        .then(showTasks)
};

document.addEventListener("DOMContentLoaded", reloadTasks)
