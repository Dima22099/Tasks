// Дан массив:

const arr = [1, '', 2, 3, '', 5, 0, false];
// Удалите из массива все пустые строки.

const fn = (arr) => arr.filter(el => el !== '');
console.log(fn(arr));