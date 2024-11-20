// Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в 
// абзаце на единицу.

const btn = document.querySelector('.btn');
const paragraph = document.querySelector('.paragraph1');

btn.addEventListener('click', (e) => {
    paragraph.textContent = Number(paragraph.textContent) + 1;       
    });
