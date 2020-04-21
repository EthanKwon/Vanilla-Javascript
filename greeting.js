const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  logout = document.querySelector(".js-logout"),
  logoutBtn = logout.querySelector("h3"),
  todoForm = document.querySelector(".js-toDoForm"),
  todo = document.querySelector(".js-todo");

const USER_LS = "currentUser",
  HIDE_CN = "hide";

//local에 새로운 이름 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//form의 input 입력후 버튼을 눌렀을 경우
function handleSubmit(event) {
  event.preventDefault();
  let currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  input.value = "";
}

//delete current Name
function deleteName() {
  localStorage.removeItem(USER_LS);
}

//logout 버튼 클릭시
function handleLogout() {
  deleteName();
  askForName();
}

// memory에 사용자가 없을 경우, 사용자를 물어본다.
function askForName() {
  form.classList.remove(HIDE_CN);
  greeting.classList.add(HIDE_CN);
  logout.classList.add(HIDE_CN);
  todo.classList.add(HIDE_CN);
  form.addEventListener("submit", handleSubmit);
}

// memory에 사용자가 있을 경우, 사용자의 정보를 불러온다.
function paintGreeting(text) {
  form.classList.add(HIDE_CN);
  greeting.classList.remove(HIDE_CN);
  logout.classList.remove(HIDE_CN);
  todo.classList.remove(HIDE_CN);
  const curTime = new Date().getHours();
  let greetingText = `GoodDay`;
  if (curTime < 12) {
    greetingText = `Good Morning`;
  } else if (curTime < 18) {
    greetingText = `Good Afternoon`;
  } else {
    greetingText = `Good Evening`;
  }
  greeting.innerText = `${greetingText}, ${text}`;
  logout.addEventListener("click", handleLogout);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //memory에사용자가 없을 경우
    askForName();
  } else {
    //memory에 사용자가 있을 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
