// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

document.querySelector('#button').addEventListener('click', (e) => {
    console.log('e', e);
    const countHref = Array.from(document.body.childNodes).filter((elem) => elem.tagName === 'A');
    const result = [];
    for (const item of countHref) {
        result.push(item);
    }
    console.log('result', result);

});