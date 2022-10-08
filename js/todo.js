const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    todos = todos.filter(todo=>todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const delbtn = document.createElement("span");
    delbtn.classList.add("del-btn");
    delbtn.innerHTML = "X";
    delbtn.addEventListener("click",deleteTodo);
    li.appendChild(delbtn);
    li.appendChild(span);
    todoList.appendChild(li);
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text:newTodo
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}