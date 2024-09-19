// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

const str = 'A123TY797';

const fn = (str) => 
    str.split('').reduce((acc, char) => Number(char) ? acc += 0 : acc += 1 , 0) > 3;
console.log(fn(str));