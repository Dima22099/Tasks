// Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму 
// введенных чисел и выведите ее в абзац.

const paragraph = document.querySelector('.paragraph');
const input = document.querySelector('.inp');

input.addEventListener('blur', (e) => {
    paragraph.textContent = input.value.split(',').reduce((acc, item) => acc + Number(item), 0);
});