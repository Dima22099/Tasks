// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

const arr = [2,3,4];

const fn = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += Math.sqrt(arr[i]);
    }
    return sum;
}
console.log(fn(arr));
