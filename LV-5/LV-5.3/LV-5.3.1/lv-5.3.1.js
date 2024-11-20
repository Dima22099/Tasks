// Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите 
// в абзац факториал введенного числа.

const paragraph = document.querySelector('#p1');
const input = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    paragraph.textContent = factorialOfNumber(input.value);
    input.value = '';
});

const factorialOfNumber = (num) => {
    const result = [];
    for (let i = 1; i <= num; i += 1) {
        result.push(i);
    }
    return result.reduce((acc, item) => acc * item, 1);
};