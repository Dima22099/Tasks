// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

const fn = () => {
    for (let i = 0; i <= 1; i += 1) {
        const result = [];
        for (let j = 0; j <= 3; j += 1) {
            const count = [];
            count.push(j);
        } 
        result.push(count);
    }
    return result;
};
console.log(fn());