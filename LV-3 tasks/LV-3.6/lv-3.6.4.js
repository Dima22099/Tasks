// Дан следующая структура:

const data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
// Найдите сумму элементов этой структуры.

const fn = (data) => {
    let result = 0;
    data.forEach(el => Object.values(el).forEach(i => result += i));
    return result;
};
console.log(fn(data));

// const fn2 = (data) => 
// 	data.forEach(el => Object.values(el).reduce((acc, value) => {
// 		acc += value;
// 	}, 0));
// console.log(fn2(data));