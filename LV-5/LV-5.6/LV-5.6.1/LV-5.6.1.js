// Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, 
// введен високосный год или нет и выведите информацию об этом в абзац.

const input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const paragraph = document.querySelector('.paragr');

btn.addEventListener('click', (e) => {
        if (Number(input.value) % 4 === 0) {
            paragraph.textContent = 'The introduced year is a leap year';
        } else {
            paragraph.textContent =  'The year entered is not a leap year.';
        }
});

