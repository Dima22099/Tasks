// Дан некоторый массив, например, вот такой:

const arr = [123, 456, 789];
// Слейте все элементы этого массива в один массив, разбив их посимвольно:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
const fn = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        const str = String(arr[i]);
        for (let j = 0; j < str.length; j += 1) {
            result.push(Number(str[j]));
        }
    }
    return result;
};
// console.log(fn(arr));

const fn2 = (arr) => arr.reduce((acc, num) => {
    String(num).split('').forEach(digit => {
        acc.push(Number(digit));
    });
    return acc;
}, [])
console.log(fn2(arr));
