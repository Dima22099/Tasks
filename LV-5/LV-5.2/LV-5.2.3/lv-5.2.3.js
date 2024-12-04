// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это 
// значение в див.

const button = document.querySelector('.button');
const result = document.querySelector('.result');

button.addEventListener('click', (e) => {
    result.innerText = document.body.getElementsByTagName('p').length;
});
