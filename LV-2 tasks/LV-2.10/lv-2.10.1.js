// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

const str = 'A123TY797';

const fn = (str) => 
    str.split('').reduce((acc, char) => Number(char) ? acc += 0 : acc += 1 , 0) > 3;
console.log(fn(str));


const fn2 = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (Number.isNaN(Number(str[i]))) {
            count += 1;
        }
        if (count === 3) {
            return count;
        }
    }
    return count;
};
console.log(fn2(str));