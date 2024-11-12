// Дана кнопка и два инпута. В инпуты вводятся числа. 
// По нажатию на кнопку найдите сумму введенных чисел.

const paragraph = document.querySelector('#p1');
const input1 = document.querySelector('#input1'); 
const input2 = document.querySelector('#input2');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    let input1Value = input1.value;
    let input2Value = input2.value;
    paragraph.textContent = Number(input1Value) + Number(input2Value);
    input1.value = '';
    input2.value = '';
});