// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст 
// переворачивался.

[...document.querySelectorAll('p')].forEach((item) => {
    item.addEventListener('click', (e) => {
        item.textContent = item.textContent.split(' ').reverse().join(' ');
    });
});