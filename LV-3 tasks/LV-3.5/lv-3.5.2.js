// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
const arr = [20, 23, 25, 30, 33, 34, 43, 50, 15];

const fn = (arr) => arr.filter(el => el % 5 === 0);

console.log(fn(arr));