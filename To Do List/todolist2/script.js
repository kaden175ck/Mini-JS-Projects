// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


const filterOption = document.querySelector('.filter-todo');


// Event Listeners


document.addEventListener('DOMContentLoaded', getTodos);

todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);


filterOption.addEventListener('click', filterTodo);





// Functions
function addTodo (event) {
    //prevent form from submitting
    event.preventDefault();

    // create todo div mentioned in HTML
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li mentioned in HTML
    const newTodo = document.createElement('li');
    // newTodo.innerText = 'hey';
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    // add todo to local storage
    saveLocalTodos(todoInput.value);



    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    // notice this is innerHTML, not innerText
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);




    // append to list
    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = '';






}


function deleteCheck(e){
    // console.log(e.target);
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'trash-btn'){
        // todoInput.trmove();
        // item.remove();

        const todo = item.parentElement;

        // animation for deletion fall
        todo.classList.add('fall');

        // remove from local storage
        removeLocalTodos(todo);

        // remove the todo after the animation
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

        
        // todo.remove();
    }


    // check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }


}


function filterTodo (e){
    const todos = todoList.childNodes;
    // console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    });



}

function saveLocalTodos(todo){
    // check if already have todos
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){

    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }



    todos.forEach(function(todo){
        // create todo div mentioned in HTML
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // create li mentioned in HTML
        const newTodo = document.createElement('li');
        // newTodo.innerText = 'hey';

        newTodo.innerText = todo;
        // this is the difference, you are getting the todo from the local storage

        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        // notice this is innerHTML, not innerText
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // append to list
        todoList.appendChild(todoDiv);

    });

}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // console.log(todo.children[0].innerText);
    // console.log(todos.indexOf('hey'));

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));


}