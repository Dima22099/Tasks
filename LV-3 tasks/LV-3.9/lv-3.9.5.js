// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
const rows = 3;
const cols = 3;  

const fn = (rows, cols) => {
    const result = [];
    let temp = 0;

    for (let i = 1; i <= rows; i += 1) {
        const arr = [];
        for (let j = 1; j <= cols; j += 1) {
            temp += 1;
            arr.push(temp);
        } 
        result.push(arr);
    } 
    return result;
};
console.log(fn(rows, cols));