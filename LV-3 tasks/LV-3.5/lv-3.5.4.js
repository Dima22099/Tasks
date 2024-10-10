// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

const arr = [20, 23, 25, 30, 33, 34, 43, 50, 15, 80, 90];

// const fn = (arr) => arr.filter(el => String(el).indexOf(3) > -1);
// console.log(fn(arr));

const fn = (arr) => arr.filter(el => String(el).includes(3));
console.log(fn(arr));

