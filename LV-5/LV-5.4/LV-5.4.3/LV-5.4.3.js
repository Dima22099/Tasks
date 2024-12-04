// Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' 
// и запишите ее в абзац.

const paragrath = document.querySelector('.paragrath');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let result = '';
    for (let i = 1; i <= 9; i += 1) {
        result += i;
    }
    paragrath.textContent = `'${result}'`;
})