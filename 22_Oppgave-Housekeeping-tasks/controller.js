
function addTasks(){
    taskArray.push(input)
    drawTasks()
}

function drawTasks(){
    selectedTasks = "";
    for(let i = 0; i < taskArray.length; i++){
        selectedTasks += /*HTML*/`
            <li onclick="removeTaskItem(${i})">${taskArray[i]}</li>
        `;

        console.log('selectedTasks index', selectedTasks)
        console.log('taskArray', taskArray)
    }
    updateView();
}

function removeTaskItem(index){
    console.log(index)
        taskArray.splice(index, 1)
  
    drawTasks()
}

function taskInput(userInput){
    input = userInput;
}