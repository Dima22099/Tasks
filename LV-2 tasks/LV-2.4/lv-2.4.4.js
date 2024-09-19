// Дана некоторая строка:

const str = 'abcde';
// Переведите в верхний регистр все нечетные буквы этой строки. 
// В нашем случае должно получится следующее:

// 'AbCdE'

// const fn = (str) => {
//     let result = '';
//     str.split('').forEach(e => (str.indexOf(e) % 2) === 0 ? result += e.toUpperCase() : result += e);
//     return result;
// };
// console.log(fn(str));


const fn2 =(str) => {
    let result = str.split('').reduce((acc, e, i) => i % 2 === 0 ? acc + e.toUpperCase() : acc + e, '');
  return result;
};
console.log(fn2(str));