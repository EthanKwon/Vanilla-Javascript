const loader = document.querySelector(".js-loader"),
  allContainer = document.querySelector(".js-all-container");

const LODING_CN = "loading";

function loadingEnd() {
  loader.classList.add(LODING_CN);
  allContainer.classList.remove(LODING_CN);
}

function init() {
  loadingEnd();
}

window.onload = init();
