// Дана некоторая строка. Найдите позицию первого нуля в строке.

const str = '123034340340340';

const fn = (str) => str.indexOf('0');
console.log(fn(str));