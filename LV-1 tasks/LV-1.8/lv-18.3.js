// Дан массив с дробями:

// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

const arr = [1.456, 2.125, 3.32, 4.1, 5.34];

const fn = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i ++) {
        result.push(arr[i].toFixed(1))
    }
    return result;
};

console.log(fn(arr));