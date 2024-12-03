// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте 
// размеры дива в два раза.

const rectangle = document.querySelector('.rectangle');
const btn = document.querySelector('.rectangleX2');

btn.addEventListener('click', (e) => {
    rectangle.style.width = rectangle.getBoundingClientRect().width * 2 + 'px';
    rectangle.style.height = rectangle.getBoundingClientRect().height * 2 + 'px';
});
