"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
const ul = document.getElementById("todolist");
const todos = JSON.parse(localStorage.getItem("todos") || "[]") || [];
todos.forEach((todo) => {
    createTodo(todo);
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    createTodo(newTodo);
});
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", (e) => {
        if (checkbox.checked) {
            todo.completed = true;
            newLi.style.textDecoration = "line-through";
        }
        else {
            todo.completed = false;
            newLi.style.textDecoration = "none";
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    });
    newLi.append(todo.text, checkbox);
    ul.appendChild(newLi);
    input.value = "";
}
