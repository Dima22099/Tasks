// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

const str = 'abba, apple, arctica, map, reduce, filter, join, reverse';

const fn = (str) => 
    str.split(', ').filter(el => el[0] === 'a')
console.log(fn(str));