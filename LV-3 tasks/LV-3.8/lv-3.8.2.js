// Дана строка в формате:

const str = 'kebab-case';
// Преобразуйте ее в формат:

// 'snake_case'

const fn = (str) => str.split('-').join('_');
console.log(fn(str));