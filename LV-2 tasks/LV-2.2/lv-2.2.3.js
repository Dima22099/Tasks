// Дана строка. Удалите предпоследний символ из этой строки.

const str = 'Gold';
const fn = (str) => str.slice(0, -1);
console.log(fn(str)); 