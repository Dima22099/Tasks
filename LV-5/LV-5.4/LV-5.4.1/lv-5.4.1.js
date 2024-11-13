// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац
//  его текстом становилось значение '!'.

document.body.addEventListener('click', (e) => {
    const currentParagr = document.querySelector('#'+ e.target.id);
    if (e.target.tagName === 'P') {
        currentParagr.textContent = '!'
    } 
});
