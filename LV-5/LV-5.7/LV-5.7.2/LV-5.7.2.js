// Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    [...document.querySelectorAll('li')].forEach((item) => {
        item.innerText = Number(item.innerText) + 1;
    });
});
