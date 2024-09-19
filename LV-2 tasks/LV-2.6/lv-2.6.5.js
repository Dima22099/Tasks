// Дан некоторый массив с числами, например, вот такой:

const arr = [1, 2, 3, 4, 5, 6];
// Слейте пары элементов вместе:

// [12, 34, 56]

const fn = (arr) => 
arr.reduce((acc, num, i) => {
    if (i % 2 !== 0) {
        acc.push(Number(`${num - 1}${num}`));
    }
    return acc; 
}, []) 
console.log(fn(arr));

// const fn = (arr) => 
//     arr.reduce((acc, num, i) => i % 2 !== 0 ? acc.push(Number(`${num - 1}${num}`)) : acc, []);
// console.log(fn(arr));