const title = document.getElementById('title');

function handleClick(){
    title.style.color === 'blue' ? title.style.color ='while' : title.style.color ='blue';
}

title.addEventListener("click",handleClick);