// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

const paragraph = document.querySelector('#p1');
const button = document.querySelector('#btn1');
const number = Number(paragraph.textContent);

const getSquare = (number) => Math.pow(number, 2);
button.addEventListener('click', () => {
    paragraph.textContent = '';
    paragraph.append(getSquare(number));
});
 