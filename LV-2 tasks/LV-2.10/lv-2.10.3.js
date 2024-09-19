// Дана некоторая строка:

const str = 'abcde abcde abcde';
// Замените в ней первый символ каждого слова на '!':

// '!bcde !bcde !bcde'

const fn = (str) => 
    str.split(' ').reduce((acc, subStr) => acc += subStr[0] = '!' + subStr.slice(1), '');
console.log(fn(str));