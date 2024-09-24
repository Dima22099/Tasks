// Дан массив:

const arr = [1, '', 2, 3, '', 5];
// Удалите из массива все пустые строки.

const fn = (arr) => arr.filter(el => Boolean(el));
console.log(fn(arr));