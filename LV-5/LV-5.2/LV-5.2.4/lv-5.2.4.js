// Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, 
// сколько символов в введенной строке.

const getCountSimbol = (str) => str.length;

const input = document.querySelector('#input1');
const button = document.querySelector('#button');
const paragraph = document.querySelector('#paragraph'); 
console.log(input, paragraph);

button.addEventListener('click', (e) => {
    paragraph.textContent = getCountSimbol(input.value);
    input.value = '';
});