// Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите 
// в абзац последний символ введенной строки.

const input = document.querySelector('.input1');
const paragraph = document.querySelector('.paragraph');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    const inputValueLastSimbol = input.value.slice(-1);
    console.log('inputValueLastSimbol', inputValueLastSimbol); 
    paragraph.textContent = inputValueLastSimbol;
});
