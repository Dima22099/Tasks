// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.

const getSquare = (num) => Math.pow(num, 2);

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        const originText = e.target.textContent;
        const number = Number(originText);
        if (!Number.isNaN(number)) {
            e.target.innerText =  getSquare(number);
        } else {
            console.log('Это не число', originText);
        }
    }
});