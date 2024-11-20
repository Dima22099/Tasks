// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте 
// размеры дива в два раза.

const rectangle = document.querySelector('.rectangle');
const btn = document.querySelector('.rectangleX2');

btn.addEventListener('click', (e) => {
    console.log('getAttribute', rectangle.getAttribute(width));
    // rectangle.style.width = 200;
    // rectangle.setAttribute('style', width )
});
