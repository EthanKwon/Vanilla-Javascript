const logout = document.querySelector(".js-logout"),
  logoutBtn = logout.querySelector("h3");

const LOGOUT_CN = "logoutShow",
  LOGOUT_OVER = "logoutOver";

function handleLogoutClick() {
  localStorage.removeItem(USER_LS);
  logoutBtn.classList.remove(LOGOUT_CN);
  askForName();
  greeting.classList.remove(SHOWING_CN);
  toDoForm.classList.remove(SHOWING_CN);
  toDoList.classList.remove(SHOWING_CN);
}

function handleLogoutOver() {
  logoutBtn.classList.add(LOGOUT_OVER);
}

function handleLogoutOut() {
  logoutBtn.classList.remove(LOGOUT_OVER);
}

function showLogoutBtn() {
  logoutBtn.classList.add(LOGOUT_CN);
  logoutBtn.addEventListener("click", handleLogoutClick);
  logoutBtn.addEventListener("mouseover", handleLogoutOver);
  logoutBtn.addEventListener("mouseout", handleLogoutOut);
}

function conformName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser !== null) {
    console.log("login!!");
    showLogoutBtn();
  }
}

function init() {
  conformName();
}

init();
