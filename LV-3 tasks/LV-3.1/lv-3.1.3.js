// Дан массив:
const arr = 
[
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];
// Отсортируйте элементы в каждом подмассиве.

const fn = (arr) => arr.map(el => el.sort())
console.log(fn(arr));