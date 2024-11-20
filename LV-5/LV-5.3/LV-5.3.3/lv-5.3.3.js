// Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите 
// сумму цифр введеного числа.


const input = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    input.value = input.value.split('').reduce((acc, item) => acc = acc + Number(item), 0);
});

