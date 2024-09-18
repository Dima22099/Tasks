// Дано некоторое число:

// 12345
// Выведите в консоль все его символы с конца

const number = 12345;
const fn = (number) => console.log(String(number).split('').reverse().forEach(e => console.log(Number(e))));

console.log(fn(number));
