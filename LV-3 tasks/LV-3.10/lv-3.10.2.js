// Дан массив и число. Оставьте в массиве только те числа, 
// которые являются делителями заданного числа.

const number = 20;
const arr = [2, 5, 6, 8, 10, 12, 24, 56];

const fn = (arr, number) => arr.filter(el => number % el === 0);
console.log(fn(arr, number));

const fn2 = (arr, number) => 
    arr.reduce((acc, el) => {
        number % el === 0 && acc.push(el);
      return acc;
    }, []);
console.log(fn2(arr, number));
