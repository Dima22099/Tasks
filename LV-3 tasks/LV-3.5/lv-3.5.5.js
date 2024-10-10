// Дано некоторое число:

const number = 35142;
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

// 12345

const fn = (number) => Number(String(number).split('').sort().join(''));
console.log(fn(number));