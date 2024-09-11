// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

const arr = [2,3,4,5];

const fn = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i += 1) {
        result += arr[i] ** 2;
    }
    return result;
};

fn();
console.log(fn(arr));