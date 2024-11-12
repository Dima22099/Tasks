// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это 
// значение в див.

const button = document.querySelector('#button');
const div = document.querySelector('#div');

button.addEventListener('click', (e) => {
    div.innerText = document.body.getElementsByTagName('p').length;
});