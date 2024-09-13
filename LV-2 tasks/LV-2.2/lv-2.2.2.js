// Дан массив с числами. Оставьте в нем только положительные числа.
const arr = [1, 2, 3, 4, -5, -6, -7,-8];


const fn = (arr) => arr.filter(e => e > 0);
console.log(fn(arr));