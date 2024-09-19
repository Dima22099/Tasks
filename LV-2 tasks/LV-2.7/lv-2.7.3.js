// Дано некоторое число, например, такое:

const number = 123789;
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

// 28
const fn = (number) => 
    Number(String(number).split('').reduce((acc, num) => {
        if (num % 2 === 0) {
            acc += num;
        }
        return acc;
    }, ''));
console.log(fn(number));

// const fn2 = (number) => 
//     Number(String(number).split('').reduce((acc, num) => num % 2 === 0 ? acc += num : acc), '');
// console.log(fn2(number));

// 128 ?????