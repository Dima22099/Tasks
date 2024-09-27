// Дана некоторая строка с числом:

const str = '1234567';
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// '1 234 567'

const fn = (str) => str.split('').reverse().reduce((acc, char, i) => {
    if ((i !== 0 && i % 3) === 0) {
        acc += ' ';
    };
		acc += char;
    return acc;
}, '').split('').reverse().join('');
// console.log(fn(str)); 


const fn2 = (str) => {
  let result = '' ;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (i % 3 === 0) {
      result = str[i] + " " + result;
    } else {
    result = str[i] + result;
    }
  } 
  return result.trim();
};
console.log(fn2(str));