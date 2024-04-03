// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);


// Functions
function addTodo (event) {
    //prevent form from submitting
    event.preventDefault();

    // create todo div mentioned in HTML
    const
}