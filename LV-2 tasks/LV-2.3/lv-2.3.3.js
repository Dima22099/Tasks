// Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.

const num = '12,34,56';

const fn = (num) => {
    const number = num.split(',').reduce((acc, e) => acc + Number(e), 0);
    return number; 
};
console.log(fn(num));