// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

const arr = [120, 200, 3900, 5600, 34, 67, 8];
const fn = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (String(arr[i]).includes('00')) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(fn(arr));