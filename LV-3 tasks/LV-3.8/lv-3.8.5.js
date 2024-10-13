// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]
const rowCount = 5;
const rowLength = 3;

const fn = (rowCount, rowLength) => {
    const result = [];
    for (let i = 1; i <= rowCount; i += 1) {
        const arr = [];
        for (let j = 1; j <= rowLength; j += 1) {
            arr.push(j)
        }
        result.push(arr)
    }
    return result;
};
console.log(fn(5, 3));
