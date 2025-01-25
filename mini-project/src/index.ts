interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.getElementById("todoform")! as HTMLFormElement;
const ul = document.getElementById("todolist")! as HTMLUListElement;

const todos: Todo[] =
  (JSON.parse(localStorage.getItem("todos") || "[]") as Todo[]) || [];

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

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", (e) => {
    if (checkbox.checked) {
      todo.completed = true;
      newLi.style.textDecoration = "line-through";
    } else {
      todo.completed = false;
      newLi.style.textDecoration = "none";
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  newLi.append(todo.text, checkbox);
  ul.appendChild(newLi);
  input.value = "";
}
