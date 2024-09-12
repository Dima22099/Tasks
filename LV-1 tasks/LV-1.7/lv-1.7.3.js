// Дано некоторое число:

// 12345
// Переверните его:

// 54321

const number = 12345;

const fn = (number) => String(number).split("").reverse().join("");

console.log(fn(number));