const loader = document.querySelector(".js-loader");

const complete = () => {
  setTimeout(() => {
    loader.classList.add("complete");
  }, 1500);
};

window.onload = complete;
