// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите 
// массив общих делителей этих чисел и выведите его в консоль.

const btn = document.querySelector('.btn');
const firstInp = document.querySelector('.firstInp');
const secondInp = document.querySelector('.secondInp');

btn.addEventListener('click', (e) => {
    const result = [];
    const whichShorter = Number(firstInp.value) > Number(secondInp.value) ? Number(secondInp.value) : Number(firstInp.value);
    const firstNum = Number(firstInp.value);
    const secondNum = Number(secondInp.value); 
    for (let i = 1; i <= whichShorter; i += 1) {
        if (!isNaN(firstNum) && !isNaN(secondNum)) {
            if (firstNum % i === 0 && secondNum % i === 0) {
                result.push(i);
            }
        }
    }
    console.log(...result);
});