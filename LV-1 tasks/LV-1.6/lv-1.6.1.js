// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

const arr = [2,3,4,5];

const fn = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i += 1) {
        result += arr[i] ** 2;
    }
    return result;
};
console.log(fn(arr));


const fn2 = (arr) => {
    const result = [];
    arr.forEach(el => {
        result.push(el ** 2)       
    });
    return result;
};
console.log(fn2(arr));


const fn3 = (arr) => {
    let result = 0;
    arr.forEach(num => {
        result += num ** 2;
    })
    return result;
};
console.log(fn3(arr));
