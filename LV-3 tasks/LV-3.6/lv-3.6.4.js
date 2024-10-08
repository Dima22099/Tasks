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
    data.forEach(el => Object.values(el).map(i => result += i));
    return result;
};
console.log(fn(data));