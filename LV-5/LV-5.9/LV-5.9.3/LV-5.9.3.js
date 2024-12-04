// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута 
// в красный цвет, а если четное - то в зеленый.

const input = document.querySelector('.inp');

input.addEventListener('blur', (e) => {
    if (Number(input.value) % 2 === 0) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
});