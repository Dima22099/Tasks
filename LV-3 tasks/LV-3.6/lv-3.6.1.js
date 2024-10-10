// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

const arr = [20, 23, 2532, 3032, 3332, 3432, 43, 50, 15, 80, 90];

const fn = (arr) => arr.filter(el => String(el).length < 3);
console.log(fn(arr));
