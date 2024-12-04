// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось 
// значение ее атрибута href.

const links = [...document.querySelectorAll('a')];
const newElem = document.createElement('div');
newElem.className = 'hrefLink';


links.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
            link.before(newElem);
            newElem.textContent = link.getAttribute('href');
            newElem.style.display = 'block';
            newElem.style.left = e.pageX + 'px';
            newElem.style.top = (e.pageY + 20) + 'px';
    });
    link.addEventListener('mouseleave', () => {
            newElem.style.display = 'none'; 
    });
});
