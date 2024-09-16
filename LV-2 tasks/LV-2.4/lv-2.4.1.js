// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

const str = 'qwerty123';

const fn = (str) => str.indexOf(str.split('').filter(Number)[0]);
console.log(fn(str));