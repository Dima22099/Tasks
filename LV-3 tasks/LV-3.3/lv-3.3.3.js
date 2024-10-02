// Дано некоторое слово:

const str = 'abcba';
// Проверьте, что это слово читается одинаково с любой стороны.;

// const fn = (str) => 
//     str === str.split('').reverse().join('');    
// console.log(fn(str));

const fn = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
       if (str[i] !== str[str.length - (i + 1)]) {
         return false;
       }
    }
    return true;
};
console.log(fn(str));