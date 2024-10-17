// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

const num = 90101990;

const fn = (num) => Number(String(num).split('').reduce((acc, el) => {
  Number(el) !== 0 ? acc += el : '';
  return acc;
}, ''));
console.log(fn(num));