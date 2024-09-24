// Дан массив. Удалите из него каждый пятый элемент.

const arr = [1, 11, 2, 3, 5, 4, 6, 7, 8, 9, 123, 147, 152, 21, 32,47];
const removeElem = 5;
const fn = (arr) => arr.reduce((acc, el, i) => i % 5 === 0 ? acc.push(el) : acc, []);
console.log(fn(arr));

