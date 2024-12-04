// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился
//  в красный цвет.

const allParagr = document.querySelectorAll('p');

[...allParagr].forEach((item) => {    
    item.addEventListener('click', (e) => {
        e.target.style.color = "red";
    })
})