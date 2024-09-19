// Дано число. Получите первую четную цифру с конца этого числа.
const number = 220899;;

const fn = (number) => Number(String(number).split('').reverse().find(num => num % 2 === 0));
console.log(fn(number));
