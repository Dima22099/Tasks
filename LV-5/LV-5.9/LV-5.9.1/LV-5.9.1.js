// Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа 
// из массива, разделив их запятыми.

const btn = document.querySelector('.btn');
const input = document.querySelector('.inp');

const arrNumbers = [12, 13, 14, 15, 16, 321, 0, 25, 329,];

btn.addEventListener('click', (e) => {
    input.value = [...arrNumbers];
});