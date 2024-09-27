// Дан массив с числами:

const arr = [1, 2, 3, 4, 5];
// Выведите в консоль элементы этого массива в обратном порядке.

const fn = (arr) => arr.reverse().forEach((num) => console.log(num));
console.log(fn(arr))

// 5
// 4
// 3
// 2
// 1
// undefined // ????