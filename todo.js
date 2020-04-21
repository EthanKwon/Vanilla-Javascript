const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  todoTitle = document.querySelector(".js-todoTitle"),
  todoToday = document.querySelector(".js-todoToday");

const TODO_LS = "userTodo",
  TODO_HIDE_CN = "hide";

function deleteTodo() {
  localStorage.removeItem(TODO_LS);
}

function saveTodo(text) {
  localStorage.setItem(TODO_LS, text);
}

//todo 추가
function paintTodo(text) {
  toDoForm.classList.add(TODO_HIDE_CN);
  todoToday.classList.remove(TODO_HIDE_CN);
  todoTitle.innerText = "Today";
  todoToday.innerText = text;
  todoToday.addEventListener("click", handleDelete);
}

//Todo가 없을 경우
function AskForTodo() {
  toDoForm.classList.remove(TODO_HIDE_CN);
  todoToday.classList.add(TODO_HIDE_CN);
  todoTitle.innerText = "What is your main focus for today?";
  toDoForm.addEventListener("submit", handleTodoSubmit);
}

//todo를 추가 할 때
function handleTodoSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  saveTodo(currentValue);
  toDoInput.value = "";
}

//todo 삭제 할 때
function handleDelete() {
  deleteTodo();
  AskForTodo();
  todoToday.innerText = "";
}

function loadTodos() {
  const loadedToDo = localStorage.getItem(TODO_LS);
  if (loadedToDo === null) {
    console.log("on todo");
    //todo가 없을 때
    AskForTodo();
  } else {
    console.log("no todo");
    //todo가 있을 때
    paintTodo(loadedToDo);
  }
}
function init() {
  loadTodos();
}

init();
