// Дано число. Выведите в консоль количество четных цифр в этом числе.


const num = 2405768736876876243;
const fn = (num) => String(num).split('').reduce((acc, e) => Number(e) % 2 === 0 ? acc + 1  : acc + 0, 0);

console.log(fn(num));