// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и 
// запишите результат в абзац.

const paragraph = document.querySelector('#p1');
const button = document.querySelector('#button1');

button.addEventListener('click', (e) => {
    let sum = 0;
    for (let i = 1; i < 100; i += 1) {
        sum += i;
    }
    paragraph.textContent = 'All sum = ' + sum;
});