// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    document.querySelector('.paragraph').textContent = document.querySelector('.link').href;
});