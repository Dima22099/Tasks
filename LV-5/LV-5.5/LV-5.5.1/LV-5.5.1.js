// Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. 
// По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.

const arrNameDate = ['Year: ', 'Month: ', 'Day: '];
const btn = document.querySelector('.btn');
const input = document.querySelector('.dateInput');

btn.addEventListener('click', (e) => {
    const inputValue = String(input.value).split('-');
    const countParagraph = [...document.querySelectorAll('p')];
    for (let i = 0; i <= countParagraph.length - 1; i += 1) {
        countParagraph[i].textContent = arrNameDate[i] + inputValue[i];
    }
});