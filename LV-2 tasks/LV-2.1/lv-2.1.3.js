// Дан массив. Удалите из него элементы с заданным значением.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const num1 = 2;
const num2 = 4;
const num3 = 6;
const numbersDelete = [2,4,6];

const fn = (arr, num1, num2, num3) => {
    const result = [...arr];
    return result.filter((e, i) => e !== num1 && e!== num2 && e !== num3);
};
console.log(fn(arr, num1, num2, num3));


const fn2 = (arr, numbersDelete) => arr.filter(e => !numbersDelete.includes(e));
console.log(fn2(arr, numbersDelete));