// Дана строка в формате:

const str = 'snake_case';
// Преобразуйте ее в формат:

// 'camelCase'

const fn = (str) => str.split('_').reduce((acc, el, i) => (i % 2 !== 0) ? acc += el[0].toUpperCase() + el.slice(1) : acc += el, '');
console.log(fn(str));


// const fn = (str) => 
//   str.split('_').reduce((acc, el, i) => {
//     if(i % 2 !== 0) {
//       acc += el[0].toUpperCase() + el.slice(1)
//     } else {
//       acc += el;
//     }
//       return acc;
//   }, '');
// console.log(fn(str))
