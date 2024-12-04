// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац
//  его текстом становилось значение '!'.

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        e.target.textContent = '!'
    } 
});