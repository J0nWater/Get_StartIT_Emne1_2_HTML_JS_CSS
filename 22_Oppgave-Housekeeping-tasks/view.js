updateView()
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <br>
    <input type="text" onchange="taskInput(this.value)">
    <button onclick="addTasks()"> Add housekeeping tasks</button>
    <br>
    <h2>Task list:</h2>
    <ul>${selectedTasks}</ul>
    <p>Click on a task if you want to remove it</p>
    `;
}