// Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса 
// в любом инпуте его значение возводилось в квадрат.

const getSquare = (num) => Math.pow(num, 2);

document.addEventListener('focusout', (e) => {
    const currentInput = e.target.id;
    const currentInputValue = e.target.value;
    document.querySelector('#' + currentInput).value = getSquare(currentInputValue);
});