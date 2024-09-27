// Дан некоторый массив с числами, например, вот такой:

const arr = [3, 1, 23, 9, 6, 12];
// Слейте пары элементов вместе:

// [31, 239, 612]

const fn = (arr) => 
arr.reduce((acc, num, i) => {
    if ((i + 1) % 2 === 0) {
        acc.push(Number(`${arr[i - 1]}${num}`));
    }
    return acc; 
}, []) 
console.log(fn(arr));