// Дан некоторый массив, например, вот такой:

const arr = [1, 2, 3, 4, 5, 6];
// Поменяйте местами пары элементов этого массива:

// [2, 1, 4, 3, 6, 5]

const fn = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length - 1; i += 2) {
        result.push(arr[i + 1], arr[i]);
    } 
    return result;
};
console.log(fn(arr));