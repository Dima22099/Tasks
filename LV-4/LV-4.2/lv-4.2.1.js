// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

const num = 16;

const fn = (num) => String(num).split('').reduce((acc, el) => acc += Number(el), 0);
console.log(fn(num));

