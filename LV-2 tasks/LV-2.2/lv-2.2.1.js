// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

const arr = [1, 2, 3, 4, -5, -6, -7,-8];

const fn = (arr) => arr.filter(e => e < 0).length;

console.log(fn(arr));