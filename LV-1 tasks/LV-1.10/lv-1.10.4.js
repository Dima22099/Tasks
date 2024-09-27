// Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:

// [1, 2, 3, 4, 5, 6]

const fn = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

console.log(fn(arr1, arr2));

const fn2 = (arr1, arr2) => {
    const result = [].concat(arr1, arr2);
    return result;
};
console.log(fn2(arr1, arr2));


const fn3 = (arr1, arr2) => {
    const res = [];
    res.push(...arr1, ...arr2);
    return res;
};
console.log(fn3(arr1, arr2));