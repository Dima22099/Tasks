// Дан массив с числами. Найдите сумму положительных элементов этого массива.

const arr = [-2, -4, 4, 6];

const fn = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }
    return result;
};

console.log(fn(arr));