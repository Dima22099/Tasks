// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    const countParagraph = Array.from(document.body.childNodes);
    const resultParagr = countParagraph.filter((item) => item.tagName === 'P');
    for (let i = 1; i <= resultParagr.length; i += 1) {
        document.querySelector('#p' + i).textContent = i;
    }
});