// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')
// Event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);




// Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check button
    const completeTodoBtn = document.createElement('button');
    completeTodoBtn.innerHTML ='<i class="fas fa-check"></i>';
    completeTodoBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeTodoBtn);
    //Trash button
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    //Append To List
    todoList.appendChild(todoDiv);
    //Cleat Todo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    const todoItem = item.parentElement;
    // Delete Todo
    if (item.classList[0] === 'trash-btn'){
        //Animation
        todoItem.classList.add("fall");
        todoItem.addEventListener('transitionend', function(){
            todoItem.remove();
        })
    }
    //Check mark
    if(item.classList[0] === "complete-btn"){
        todoItem.classList.toggle("completed");
    }
}

// filter todo
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display= 'none';
                }
                break;
            case "uncompleted":
                if(todo.classList.contains('completed')){
                    todo.style.display= 'none';
                }
                else{
                    todo.style.display = 'flex';
                }
                break;
        }
    })
}
