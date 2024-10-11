// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

const fn = () => {
    const count = 5;
    const number = 3;
    const result = [];
    for (let i = 0; i <= count; i += 1) {
        const arr = [];
        for (let j = 1; j <= number; j += 1) {
            arr.push(j)
        }
        result.push(arr)
    }
    return result;
};
console.log(fn());