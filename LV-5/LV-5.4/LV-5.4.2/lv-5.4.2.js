// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

document.querySelector('#button').addEventListener('click', (e) => {
    const countHref = [...document.querySelectorAll('a')];
    const result = [];
    for (const item of countHref) {
        result.push(item.href);
    }
    return result;
});