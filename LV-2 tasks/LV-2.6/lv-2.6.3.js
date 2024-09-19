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
console.log(fn(str)); 