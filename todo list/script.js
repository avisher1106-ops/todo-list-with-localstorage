const addNewTaskButton = document.querySelector('#addNewTaskButton')
const clearAndPrintTasks = () => {
    //WHEN APP STARTS, NEED TO DISPLAY ALL THE SAVED TASKS!
    //FIRST, WE ARE GETTING THE TASKS AND PARSING THEM
    //CLEAR EXISTING HTML (SO WE WONT DUPLICATE)
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    document.querySelector('#tasks').innerHTML = ''
    savedTasks.map((task) => {
        document.querySelector('#tasks').innerHTML += '<div class="task">' + task + '</div>'
    })
}


//CHECKING IF EXISTING TASKS. IF NO EXISTING, SAVE EMPTY ARRAY TO LOCALSTORAGE
if (localStorage.getItem('tasks') === null) {
    console.log('Tasks is empty! nothing in cache')
    const emptyArray = JSON.stringify([])
    localStorage.setItem('tasks', emptyArray)
}


clearAndPrintTasks()


//LISTENING TO CLICK EVENT ON THE ADD NEW TASK BUTTON
addNewTaskButton.addEventListener('click', () => {
    const newTaskTitle = document.querySelector('#newTaskTitle').value
    //כדי לשמור משימה חדשה, אני צריך לשלוף את המערך קיים, להמיר אותו, ולהוסיף לו את המשימה החדשה


    const tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.push(newTaskTitle)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    document.querySelector('#newTaskTitle').value = ''
    clearAndPrintTasks()
})
document.querySelector('.remove').addEventListener('click',()=>{
tasks.remove(tasks.lenght-1)
})
