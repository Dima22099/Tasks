// Дано некоторое слово:

const str = 'abcba';
// Проверьте, что это слово читается одинаково с любой стороны.;
const fn = (str) => 
    str === str.split('').reverse().join('');    
console.log(fn(str));