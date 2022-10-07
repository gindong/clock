const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");

function deleteTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo
    const delbtn = document.createElement("span");
    delbtn.classList.add("del-btn");
    delbtn.innerHTML = "X";
    delbtn.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(delbtn);
    todoList.appendChild(li);
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo)
}

todoForm.addEventListener("submit",handleTodoSubmit);