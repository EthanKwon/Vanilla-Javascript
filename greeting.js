const
    logout = document.querySelector('.js-logout'),
    logoutBtn = logout.querySelector('h3'),
    form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS  = 'currentUser',
    SHOWING_CN = 'showing',
    LOGOUT_CN = 'logoutShow',
    LOGOUT_FOCUS = 'logoutFocus';

function handleLogoutClick() {
    localStorage.removeItem(USER_LS);
    logoutBtn.classList.remove(LOGOUT_CN);
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
}

function handleLogoutFocus() {
    logoutBtn.classList.add(LOGOUT_FOCUS);
}

function showLogoutBtn() {
    logoutBtn.classList.add(LOGOUT_CN);
    logoutBtn.addEventListener('click',handleLogoutClick);
    logoutBtn.addEventListener('onfocus',handleLogoutFocus);
}

function saveName(text) {
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
    event.preventDefault();
    let currentValue = input.value;
    paintGreeting(currentValue);
    showLogoutBtn();
    saveName(currentValue);
    input.value = '';
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); 
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        showLogoutBtn();
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();