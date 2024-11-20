// Дан абзац, инпут и кнопка. В инпут вводится слово. 
// По нажатию на кнопку переверните слово и запишите его в абзац.

const paragraph = document.querySelector('#p1');
const input = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    paragraph.textContent = input.value.split('').reverse().join('');
    input.value = '';
});