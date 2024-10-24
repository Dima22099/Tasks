// Сделайте функцию, которая параметром будет получать строку со словами,
//  а возвращать строку в верхнем регистре, состоящую из первых букв слов.


const text = 'hello my friend!';

const firstCharUpperCase = (text) => text.split(' ').reduce((acc, el) => acc += el[0].toUpperCase() + el.slice(1) + ' ', '').trim();
console.log(firstCharUpperCase(text));
