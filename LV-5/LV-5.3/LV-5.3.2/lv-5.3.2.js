// Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. 
// Определите, какое из введенных чисел больше и выведите его в абзац.

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const button = document.querySelector('#button');
const paragraph = document.querySelector('#paragraph');

button.addEventListener('click', (e) => {
    paragraph.textContent = input1.value > input2.value ? input1.value : input2.value;
});
