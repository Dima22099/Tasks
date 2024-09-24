// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const str = 'qwerty123099';

const fn = (str) => str.split('').map((e, i) => Number(e) ? i : '').filter(Boolean);
console.log(fn(str));


const fn2 = (str) => 
    str.split('').reduce((acc, el, i) => !Number.isNaN(Number(el)) ? acc + i : acc, []);
console.log(fn2(str));