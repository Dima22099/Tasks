// В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в 
// инпуте стала дата в формате 35.12.2025.

const input = document.querySelector('.inp');

input.addEventListener('blur', (e) => {
    input.value = input.value.split('-').reverse().join('.');
});