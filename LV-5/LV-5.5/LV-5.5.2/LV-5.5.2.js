// Даны два инпута и кнопка. В инпуты вводятся числа. 
// По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.

const btn = document.querySelector('.btn');
const firstInput = document.querySelector('.input1');
const secondInput = document.querySelector('.input2');
const paragraph = document.querySelector('.paragraph');

btn.addEventListener('click', (e) => {
    const result = [];
    for (let i = Number(firstInput.value); i < Number(secondInput.value); i += 1) {
        if (Number.isInteger(i)) {
            result.push(i);
        }
    }
    paragraph.textContent = result;
    firstInput.value = '';
    secondInput.value = '';
});
