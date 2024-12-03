// Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму 
// чисел и выведите их в инпут.

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    document.querySelector('.resultInp').value = [...document.querySelectorAll('li')].reduce((acc, item) => 
        acc + Number(item.innerText), 0);
});