// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

const arr = [-2, -4, 2, 4, 6, 12, 24];

const fn = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0 && arr[i] < 10) {
            sum += arr[i];
        }
    }
    return sum;
};

console.log(fn(arr));