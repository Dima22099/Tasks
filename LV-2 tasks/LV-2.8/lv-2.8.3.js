// Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:

// [1, 2, 'a', 'b', 'c', 3]

const fn = (arr1, arr2) => {
    let removed = arr1.splice(2, 1);
    return [...arr1, ...arr2, ...removed]
};
console.log(fn(arr1, arr2));
