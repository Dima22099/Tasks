// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

const str = 'zero, value, date, abba, qwerty, milk, baby, task';

const fn = (str) => 
    str.split(', ').sort().join(', ');
console.log(fn(str));