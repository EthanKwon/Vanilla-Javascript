const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  toDos = toDos.filter(todo => todo.id != parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("i");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.className = "fas fa-trash-alt";
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  span.className = "toDo";
  li.appendChild(delBtn);
  li.appendChild(span);
  li.className = "toDoItem";
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);

  toDoInput.value = "";
}

function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(todo) {
      paintTodo(todo.text);
    });
  }
}
function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
