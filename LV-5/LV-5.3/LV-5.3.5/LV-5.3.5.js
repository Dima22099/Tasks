// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    const countParagraph = document.querySelectorAll('p');
    for (let i = 1; i <= countParagraph.length; i += 1) {
        document.querySelector('#p' + i).textContent = i;
    }
});