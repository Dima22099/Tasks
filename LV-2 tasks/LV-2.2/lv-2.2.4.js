// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

const arr = [1, 2, 3, 4, 5, 6];

const fn = (arr) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum1 += arr[i]; 
    }
    for (let i = arr.length / 2; i < arr.length; i++) {
        sum2 += arr[i]
    }
    return sum1 / sum2;
};
console.log(fn(arr));

