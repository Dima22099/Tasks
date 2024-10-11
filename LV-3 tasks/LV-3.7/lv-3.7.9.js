// Дан следующая структура:

let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
// Найдите сумму элементов этой структуры.

const fn = (data) => 
   data.reduce((acc, obj) => {
    Object.values(obj).flat(2).forEach(el => acc += el);
    return acc;
   }, 0); 
console.log(fn(data));
