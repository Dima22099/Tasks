// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const str = 'qwerty123099';

const fn2 = (str) => str.split('').map((e, i) => Number(e) ? i : '').filter(Boolean);
console.log(fn2(str));