// Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число 
// из диапазона от 1 до 100.

const input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const min = 1;
const max = 100;

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min));
};

btn.addEventListener('click', (e) => {
    input.value = getRandomNum(min, max);
});