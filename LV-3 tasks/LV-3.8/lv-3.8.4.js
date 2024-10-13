// Дана строка в формате:

const str = 'camelCase';
// Преобразуйте ее в формат:

// 'snake_case'

const fn = (str) => 
    str.split('').reduce((acc, el) => 
        el === el.toUpperCase() ? acc += '_' + el.toLowerCase() : acc += el, '');    
console.log(fn(str));

// const fn = (str) => 
//     str.split('').reduce((acc, el) => {
//       if(el === el.toUpperCase()) {
//         acc += '_' + el.toLowerCase();
//       } else {
//         acc += el;
//       }
//       return acc;
//     }, '');    
// console.log(fn(str));

