// Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов 
// в нем появлялся квадрат введенного в него числа.

const mathSquare = (num) =>  Math.pow(num, 2);

const allInputs = [...document.querySelectorAll('input')].forEach((item) => {
    item.addEventListener('blur', (e) => {
        const inpValue = Number(item.value);
        if (!isNaN(inpValue)) {
           item.value = mathSquare(inpValue);
        } 
    });
});