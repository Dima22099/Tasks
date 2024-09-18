// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

const arr = [2, 3, 4, 5, 6, 7, 8];

const fn = (arr) => {
    const result = arr.map(el => (el * 1.1).toFixed(1)).map(Number);
    return result;
};

console.log(fn(arr));