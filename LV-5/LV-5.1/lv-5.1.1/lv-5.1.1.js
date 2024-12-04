// Даны два инпута, абзац и кнопка. В инпуты вводятся числа.
//  По нажатию на кнопку выведите в абзац сумму этих чисел.

const button = document.querySelector('#btn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const paragraph = document.querySelector('#paragr');

const getSum = (first, second) => Number(first) + Number(second);

button.addEventListener("click", () => {
    paragraph.textContent = getSum(input1.value, input2.value);
});
